/*解析客户端json为模板需要的json*/
var DataFormat = {};

DataFormat.I_ReadAloud = function (data) {
    var json = {};
    json.title = data[0].Introduction;
    json.section = [];
    for (var i in data) {
        if (data[i].SectionName == 'PhrasesReading') {
            json.section[i] = {
                type: 'phrases',
                title: GetSectionTitle(i),
                desc: data[i].Title,
                list: []
            }
            for (var j in data[i].QuestionsList) {
                json.section[i].list[j] = { text: data[i].QuestionsList[j].Text, sound: data[i].QuestionsList[j].Audio };
            }
        }
        else if (data[i].SectionName == 'SentenceReading') {
            json.section[i] = {
                type: 'sentences',
                title: GetSectionTitle(i),
                desc: data[i].Title,
                list: []
            }
            for (var j in data[i].QuestionsList) {
                json.section[i].list[j] = { text: data[i].QuestionsList[j].Text, sound: data[i].QuestionsList[j].Audio };
            }
        }
        else if (data[i].SectionName == 'TextReading') {
            json.section[i] = {
                type: 'passage',
                title: GetSectionTitle(i),
                desc: data[i].Title,
                content: { text: data[i].QuestionsList[0].Text, sound: data[i].QuestionsList[0].Audio }
            }
        }
        else {
            json.section[i] = {};
        }
    }
    return json;
}

DataFormat.II_QuickResponse = function (data) {
    var json = {};
    json.title = data[0].Introduction;
    json.section = [];
    for (var i in data) {
        if (data[i].SectionName == 'QuickResponse') {
            json.section[i] = {
                type: 'questions',
                title: GetSectionTitle(i),
                desc: data[i].Title,
                list: []
            }
            for (var j in data[i].QuestionsList) {
                json.section[i].list[j] = { text: data[i].QuestionsList[j].Text, sound: data[i].QuestionsList[j].Audio };
            }
        }
        else if (data[i].SectionName == 'TopicPresentation') {
            json.section[i] = {
                type: 'ask',
                title: GetSectionTitle(i),
                desc: data[i].Title,
                content: data[i].QuestionsList[0].Text
            }
        }
        else {
            json.section[i] = {};
        }
    }
    return json;
}

DataFormat.III_ListenWriteRetell = function (data) {
    var json = {};
    json.title = data[0].Introduction;
    json.section = [];
    for (var i in data) {
        if (data[i].SectionName == 'MindMapping') {
            json.section[i] = {
                type: 'blank',
                title: GetSectionTitle(i),
                desc: data[i].Title,
                content: data[i].QuestionsList[0].Text,
                pic: data[i].QuestionsList[0].QuestionList[0].Image,
                sound: data[i].QuestionsList[0].QuestionList[0].Audio,
                original: data[i].QuestionsList[0].QuestionList[0].Text,
                answer: data[i].QuestionsList[0].QuestionList[0].Answer,
                blanks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
            }
        }
        else if (data[i].SectionName == 'ListenAndWrite') {
            json.section[i] = {
                type: 'table',
                title: GetSectionTitle(i),
                desc: data[i].Title,
                content: data[i].QuestionsList[0].Text,
                data: [],
                colspan: [],
                sound: data[i].QuestionsList[0].Audio,
                original: data[i].QuestionsList[0].Image,
                answer: data[i].QuestionsList[0].XmlAnswerPath
            }
            for (var j in data[i].QuestionsList[0].QuestionList) {
                /*表格数据*/
                json.section[i].data[j] = [];
                for (var k in data[i].QuestionsList[0].QuestionList[j].AnswerList) {
                    json.section[i].data[j][k] = replaceAllStr(data[i].QuestionsList[0].QuestionList[j].AnswerList[k], '/textarea/', '[___]');
                }
                /*合并单元格信息*/
                json.section[i].colspan[j] = [];
                for (var k in data[i].QuestionsList[0].QuestionList[j].SelectList) {
                    json.section[i].colspan[j][k] = data[i].QuestionsList[0].QuestionList[j].SelectList[k];
                }
            }
        }
        else if (data[i].SectionName == 'ListenAndRetelling') {
            json.section[i] = {
                type: 'ask',
                title: GetSectionTitle(i),
                desc: data[i].Title,
                content: data[i].QuestionsList[0].Text,
            }
        }
        else {
            json.section[i] = {};
        }
    }
    return json;
}

DataFormat.IV_PictureTalk = function (data) {
    var json = {};
    json.title = data[0].Introduction;
    json.desc = data[0].QuestionsList[0].QuestionTitle;
    json.section = [];
    for (var i in data) {
        if (data[i].SectionName == 'PictureAndWrite') {
            json.section[i] = {
                type: 'table',
                title: GetStepTitle(i),//此处是加粗的标题
                desc: data[i].QuestionsList[0].Text,//此处是普通标题
                data: [],
                colspan: [],
                pic: data[i].QuestionsList[0].Image,
                answer: data[i].QuestionsList[0].XmlAnswerPath
            }
            for (var j in data[i].QuestionsList[0].QuestionList) {
                /*表格数据*/
                json.section[i].data[j] = [];
                for (var k in data[i].QuestionsList[0].QuestionList[j].AnswerList) {
                    json.section[i].data[j][k] = replaceAllStr(data[i].QuestionsList[0].QuestionList[j].AnswerList[k], '/textarea/', '[___]');
                }
                /*合并单元格信息*/
                json.section[i].colspan[j] = [];
                for (var k in data[i].QuestionsList[0].QuestionList[j].SelectList) {
                    json.section[i].colspan[j][k] = data[i].QuestionsList[0].QuestionList[j].SelectList[k];
                }
            }
        }
        else if (data[i].SectionName == 'PictureSituationResponse') {//RPSRA
            json.section[i] = {
                type: 'questions',
                title: GetStepTitle(i),//此处是加粗的标题
                desc: data[i].QuestionsList[0].Text,//此处是普通标题
                pic: data[i].QuestionsList[0].Image,
                list: []
            }
            for (var j in data[i].QuestionsList[0].QuestionList) {
                json.section[i].list[j] = data[i].QuestionsList[0].QuestionList[j].Text;
            }
        }
        else if (data[i].SectionName == 'PictureAndTalking') {
            json.section[i] = {
                type: 'talk',
                title: GetStepTitle(i),//此处是加粗的标题
                desc: data[i].QuestionsList[0].QuestionList[0].Text//此处是普通标题
            }
        }
        else {
            json.section[i] = {};
        }
    }
    return json;
}

DataFormat.V_GroupDiscussion = function (data) {
    var json = {};
    json.title = data[0].Introduction;
    for (var i in data) {
        if (data[i].SectionName == 'GroupDiscussion') {
            json.desc = data[i].QuestionsList[0].Text;
            json.tips = data[i].QuestionsList[0].QuestionList[0].Text;
            json.remark = '';//暂无
        }
        else {
            json.section[i] = {};
        }
    }
    return json;
}

DataFormat.VI_Listening = function (data) {
    var json = {};
    json.title = data[0].Introduction;
    json.section = [];
    for (var i in data) {
        if (data[i].SectionName == 'PictureChoice') {//LPCA
            json.section[i] = {
                type: 'short_conversations',
                title: GetSectionTitle(i),
                desc: data[i].QuestionsList[0].QuestionTitle,
                list: []
            }
            for (var j in data[i].QuestionsList[0].QuestionList) {
                json.section[i].list[j] = {
                    options: [],
                    sound: data[i].QuestionsList[0].QuestionList[j].Audio,
                    original: data[i].QuestionsList[0].QuestionList[j].Text
                };
                for (var k in data[i].QuestionsList[0].QuestionList[j].SelectList) {
                    json.section[i].list[j].options[k] = data[i].QuestionsList[0].QuestionList[j].SelectList[k];
                }
            }
        }
        else if (data[i].SectionName == 'ShortPassages') {//LSPAA LSPAB LSPABC
            json.section[i] = {
                type: 'short_passages',
                title: GetSectionTitle(i),
                desc: data[i].QuestionsList[0].QuestionTitle,
                group: []
            }
            for (var j in data[i].QuestionsList) {
                json.section[i].group[j] = {
                    title: data[i].QuestionsList[j].Text,
                    sound: data[i].QuestionsList[j].Audio,
                    original: data[i].QuestionsList[j].Image,
                    list: []
                };
                for (var k in data[i].QuestionsList[j].QuestionList) {
                    json.section[i].group[j].list[k] = {
                        options: [],
                        sound: data[i].QuestionsList[j].QuestionList[k].Audio
                    };
                    for (var l in data[i].QuestionsList[j].QuestionList[k].SelectList) {
                        json.section[i].group[j].list[k].options[l] = data[i].QuestionsList[j].QuestionList[k].SelectList[l];
                    }
                }
            }
        }
        else if (data[i].SectionName == 'ConversationAndWrite') {//LCAWA LCAWB
            json.section[i] = {
                type: 'longer_conversations',
                title: GetSectionTitle(i),
                desc: data[i].QuestionsList[0].QuestionTitle,
                group: []
            }
            for (var j in data[i].QuestionsList) {
                json.section[i].group[j] = {
                    title: data[i].QuestionsList[j].Text,
                    sound: data[i].QuestionsList[j].Audio,
                    sortText: data[i].QuestionsList[j].Video,
                    original: data[i].QuestionsList[j].Image,
                    answer: data[i].QuestionsList[j].XmlAnswerPath,
                    list: [],
                    colspan: []
                };
                for (var k in data[i].QuestionsList[j].QuestionList) {
                    /*表格数据*/
                    json.section[i].group[j].list[k] = [];
                    for (var l in data[i].QuestionsList[j].QuestionList[k].AnswerList) {
                        json.section[i].group[j].list[k][l] = replaceAllStr(data[i].QuestionsList[j].QuestionList[k].AnswerList[l], '/input/', '[___]');
                    }
                    /*合并单元格信息*/
                    json.section[i].group[j].colspan[k] = [];
                    for (var l in data[i].QuestionsList[j].QuestionList[k].SelectList) {
                        json.section[i].group[j].colspan[k][l] = data[i].QuestionsList[j].QuestionList[k].SelectList[l];
                    }
                }
            }
        }
        else {
            json.section[i] = {};
        }
    }
    return json;
}

DataFormat.VII_WatchTalk = function (data) {
    var json = {};
    json.title = data[0].Introduction;
    for (var i in data) {
        if (data[i].SectionName == 'WatchAndTalk') {
            json.desc = data[i].Title;
            json.video = data[i].QuestionsList[0].Video;
            json.questions = [];
            json.answer = '';//使用每个小题的答案拼接
            //json.rootPath = pageContext + '/pages/';//flash播放器地址，不能使用相对路径，部分机器有获取路径bug
            for (var j in data[i].QuestionsList[0].QuestionList) {
                json.questions[j] = data[i].QuestionsList[0].QuestionList[j].Text;
                if (json.answer == '') {
                    json.answer = data[i].QuestionsList[0].QuestionList[j].Answer;
                }
                else {
                    json.answer += '##' + data[i].QuestionsList[0].QuestionList[j].Answer;
                }
            }
        }
        else {
            json.section[i] = {};
        }
    }
    return json;
}

DataFormat.MessageBox = function (data) {
    var json = {};
    json = data;
    return json;
}

DataFormat.AlertBox = function (data) {
    var json = {};
    json = data;
    return json;
}

DataFormat.PackageList = function (data) {
    var json = {};
    json = data;
    return json;
}



/*获取模板的html*/
function TepleateHtml(tpl_name, data) {
    this.html = new TemplateBuilder().getHtml(tpl_name, DataFormat[tpl_name](data));
}

/*获得标题名称*/
function GetSectionTitle(index) {
    var letters = [];
    for (var i = 65; i < 91; i++) {
        letters.push(String.fromCharCode(i));
    }
    if (index <= letters.length - 1) {
        return 'Section ' + letters[index];
    }
    else {
        return 'Section ' + letters[letters.length - 1];
    }
}

/*获得标题名称*/
function GetStepTitle(index) {
    var letters = [];
    for (var i = 1; i < 20; i++) {
        letters.push(i.toString());
    }
    if (index <= letters.length - 1) {
        return 'Step ' + letters[index] + ':';
    }
    else {
        return 'Step ' + letters[letters.length - 1] + ':';
    }
}