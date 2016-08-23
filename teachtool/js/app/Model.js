/*
 * 试卷数据模型
 */
var Model = {
    SectionList: {},
    FlagList:{},
    _DefaultSection: "",
    _IsRefreshData: true,//是否需要刷新数据
    GetDefaultSection: function () {
        return this._DefaultSection;
    },
    SetDefaultSection: function (defaultSection) {
        this._DefaultSection = defaultSection;
    },
    QueryRefreshData: function () {
        return this._IsRefreshData;
    },
    SetRefreshData: function (isRefresh) {
        this._IsRefreshData = isRefresh;
    },
    InitData: function (resultJson,callback) {
        if (!resultJson)
            return;
        //解析数据
        var list = resultJson.ListExamPart;
        this._DefaultSection = list[0].SectionName + '_Flag_' + list[0].Flag;

        var flagList = [];
        for (var i = 0; i < list.length; i++) {
            var newSectionName = list[i].SectionName + '_Flag_' + list[i].Flag;
            list[i].SectionName = newSectionName;
            this.SectionList[newSectionName] = this.ParseData(list[i]);
            if (list[i].Flag) {
                this.FlagList[list[i].Flag] = this.FlagList[list[i].Flag] || [];
                var sectionText = 'Section ' + String.fromCharCode(this.FlagList[list[i].Flag].length + 65);

                this.FlagList[list[i].Flag].push({ sectionName: newSectionName, sectionText: sectionText });
            }
        }

        //标记已解析数据
        this.SetRefreshData(false);

        if (isFunction(callback)) {
            callback(this.FlagList);
        }
    },
    DeepCopy: function(source) { 
        var result={};
        for (var key in source) {
            result[key] = typeof source[key]==='object'? deepCopy(source[key]): source[key];
        } 
        return result; 
    },
    ParseData: function (sectionData) {
        //console.log(sectionData);
        var questionList = sectionData.QuestionsList;
        var answerInfo = "";
        var questionsListNew = [];
        for (var i = 0; i < questionList.length; i++) {
            var questionListNew = [];
            var itemObject = {};
            var questionDataItem = {};

            var json = eval("(" + questionList[i].QuestionList + ")");
            //console.log(json, questionList[i].QuestionList, sectionData.SectionName);

            //item节点
            if (isArray(json.data)) {
                for (var k = 0; k < json.data.length; k++) {
                    itemObject[json.data[k].name] = json.data[k].data;
                }
            }

            var itemAnswerTime = json["answertime"];
            //group节点
            var questions = json.group.question;
            if (isArray(questions)) {
                for (var j = 0; j < questions.length; j++) {
                    (function (questionDataItem, j) {
                        var questionData = Model.DeepCopy(questionDataItem);
                        questionData["index"] = j + 1;
                        questionData["controlid"] = sectionData.SectionName + questionData["index"];
                        questionData["answertime"] = questions[j]['answertime'] ? questions[j]['answertime'] * 1000 : itemAnswerTime * 1000;//时间单位为毫秒
                        for (var k = 0; k < questions[j].data.length; k++) {
                            var dataName = questions[j].data[k].name;
                            questionData[dataName] = questions[j].data[k].data;

                            if (!questions[j].data[k].data && isArray(questions[j].data[k]["#text"])) {
                                var textArr = questions[j].data[k]["#text"];
                                var text = '';
                                for (var kk = 0; kk < textArr.length; kk++) {
                                    text += textArr[kk] + '<br/>';
                                }
                                questionData[dataName] = text.slice(0, text.lastIndexOf('<br/>'));
                            }
                        }
                        //加上choice选项
                        if (isArray(questions[j].choice)) {
                            var choiceList = [];
                            for (var h = 0; h < questions[j].choice.length; h++) {
                                choiceList.push(questions[j].choice[h].choice);
                            }
                            questionData["choices"] = choiceList;
                        }
                        questionListNew.push(questionData);
                    })(questionDataItem,j)
                }
            }
            else {
                if (isArray(questions.data)) {
                    for (var k = 0; k < questions.data.length; k++) {
                        questionDataItem[questions.data[k].name] = questions.data[k].data;
                    }
                }
                else {
                    if (questions.data.name) {
                        questionDataItem[questions.data.name] = questions.data.data;
                    }
                }
                questionDataItem["controlid"] = sectionData.SectionName + i;
                questionDataItem["answertime"] = questions['answertime'] ? questions['answertime'] * 1000 : itemAnswerTime * 1000;//时间单位为毫秒
                //加上choice选项
                if (isArray(questions.choice)) {
                    var choiceList = [];
                    for (var h = 0; h < questions.choice.length; h++) {
                        choiceList.push(questions.choice[h].choice);
                    }
                    questionDataItem["choices"] = choiceList;
                }

                //处理table节点
                if (isObject(questions.table)) {
                    //加上textid
                    for (var h = 0; h < questions.table.row.length; h++) {
                        var data = questions.table.row[h].data;
                        for (var g = 0; g < data.length; g++) {
                            if (data[g].data && data[g].data.indexOf('/textarea/') != -1) {
                                data[g]['textid'] = String.format('{0}_{1}', sectionData.SectionName, h * data.length + g);
                            }
                        }
                    }
                    questionDataItem["table"] = questions.table;
                }

                questionListNew.push(questionDataItem);

            }
            itemObject["QuestionList"] = questionListNew;
            itemObject["RelativeUrl"] = questionList[i].RelativeUrl;
            itemObject["AnswerInfo"] = questionList[i].AnswerInfo;
            questionsListNew.push(itemObject);

        }

        sectionData.QuestionsList = questionsListNew;
        //console.log(sectionData, questionsListNew, sectionData.SectionName);

        return sectionData;
    },
    GetData: function (sectionName) {
        var flag = this.SectionList[sectionName].Flag;
        var sectionData = this.SectionList[sectionName];
        //获取缓存的录音回放音频url数据
        for (var i = 0; i < sectionData.QuestionsList.length; i++) {
            var questionsList = sectionData.QuestionsList[i];

            for (var j = 0; j < questionsList.QuestionList.length; j++) {
                var question = questionsList.QuestionList[j];
                if (question["controlid"]) {
                    question["refreshAudio"] = localdata.getItem(question["controlid"]) || '';
                    question["refreshClass"] = question["refreshAudio"] ? "btn-refresh" : "btn-refreshdis";
                }

                if (question["table"]) {
                    //加上textid
                    for (var h = 0; h < question.table.row.length; h++) {
                        var data = question.table.row[h].data;
                        for (var g = 0; g < data.length; g++) {
                            if (data[g]['textid']) {
                                data[g]['textcontent'] = localdata.getItem(data[g]['textid']) || '';
                            }
                        }
                    }
                }
            }
        }

        return {
            SectionList: this.FlagList[flag],
            SectionData: sectionData
        };
    },
    SetData: function (sectionName, data) {
        this.SectionList[sectionName] = data;
    }
}