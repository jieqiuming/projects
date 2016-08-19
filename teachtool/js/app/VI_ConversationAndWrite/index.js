var Section_ConversationAndWrite = {
    sectionData: '',
    itemData: '',
    sectionList: '',
    currentSection: '',
    viewer: new CommView(),
    title: '',
    subtitle: '',
    pageNav: '',
    option: '',
    sectionNav: '',
    pageFlag: 'page',
    pageCount: 0,
    pageSize: 3,
    fmData: '',
    Render: function (sectionName) {
        //初始化数据,获取当前数据
        //初始化section导航区数据
        //初始化当前题目内容 主要是页面的分割
        if (this.currentSection !== sectionName) {
            this.currentSection = sectionName;
            this.Init();
        }

        this.FormateData();
        var option = {
            title: this.title,
            navmenu: this.sectionNav,
            content: this.pageNav[0].data.text,
            navquestion: {
                isShow: true,
                content: this.pageNav
            }
        };

        this.option = option;
        ////渲染页面
        this.viewer.show(option);
        ////绑定事件
        this.BindPageEvent();

    },
    Init: function () {
        var data = Model.GetData(this.currentSection);
        console.log('--------ConversationAndWrite------');
        console.log(data);
        var sectionData = data['SectionData'];
        var itemData = sectionData['QuestionsList'];
        this.fmData = new Array();
        //格式化答案和音频路径
        var itemLen = itemData.length;

        for (var i = 0; i < itemLen; i++) {
            var pagesData = {};
            var pageData = new Array();
            var tempQuestion = itemData[i];
            var questions = tempQuestion['QuestionList'];
            var questionsLen = questions.length;
            var relationUrl = tempQuestion['RelativeUrl'];
            this.pageCount += questionsLen / this.pageSize;

            for (var j = 0; j < questionsLen; j++) {
                var pageIndex = Math.floor(j / this.pageSize);
                var question = questions[j];
                questions[j]['answerText'] = question['answerText'].replace(/##/g, '<br/>');
                questions[j]['num'] = j + 1;

                if (pageData[pageIndex] instanceof Array) {
                    pageData[pageIndex].push(questions[j]);
                } else {
                    pageData[pageIndex] = new Array();
                    pageData[pageIndex].push(questions[j]);
                }
            }

            var sortContent = itemData[i]['sortContent'];

            if (sortContent) {
                var sortArr = sortContent.split('<br />');
                itemData[i]['sortContent'] = sortArr;
            }

            if (i == 0) {
                itemData[i]['subtitle'] = itemData[i]['promptText'];
            } else if (i == 1) {
                itemData[i]['subtitle'] = itemData[0]['promptText'];
            }

            itemData[i]['relationUrl'] = relationUrl;
            itemData[i]['QuestionList'] = questions;
            pagesData = itemData[i];
            pagesData['pageData'] = pageData;
            this.fmData.push(pagesData);
            console.log('格式化后的数据');
            console.log(this.fmData);
        }

        this.sectionData = sectionData;
        this.itemData = itemData;
        this.sectionList = data['SectionList'];
        this.title = sectionData['Introduction'];
    },
    FormateData: function () {
        var _this = this;
        var secData = _this.sectionData;
        var itemData = _this.itemData;
        var sectionList = _this.sectionList;

        var subtitle = itemData[0]['promptText'];
        var promptAudio = itemData[0]['promptAudio'];
        //副标题
        this.subtitle = subtitle;

        //section导航区
        _this.InitNavSection();

        this.pageNav = new Array();
        var index = this.pageNav.length;
        var pageNow = true;

        _this.itemData[0]['currentSectionNav'] = _this.GetCurSectionNav();
        this.pageNav.push({ attr: { id: this.pageFlag + '_topic', index: index++ }, data: { text: _this.viewer.getTplHtml('VI_ConversationAndWrite_topic', _this.itemData[0]) }, isCurrent: pageNow });

        var fmData = this.fmData;
        var fmLen = fmData.length;

        for (var i = 0; i < fmLen; i++) {
            var pageData = fmData[i];
            pageData['flag'] = i;
            pageData['pagenum'] = i;
            this.pageNav.push({
                attr: { id: this.pageFlag + '_' + i, index: index++ },
                data: { text: _this.viewer.getTplHtml('VI_ConversationAndWrite_content', { questions: pageData }) },
                page: pageData
            });

        }
    },
    InitNavSection: function () {
        var _this = this;
        var sectionList = this.sectionList;
        var len = sectionList.length;
        var content = new Array();
        var isShowNav = false;

        if (len > 1) {
            isShowNav = true;
        }

        for (var i = 0; i < len; i++) {
            var item = sectionList[i];
            var text = item['sectionText'];
            var secName = item['sectionName'];
            var sectionDiv = {
                text: text,
                attr: {
                    id: secName,
                    name: secName,
                    flag: secName
                }
            };

            if (_this.currentSection === secName) {
                sectionDiv['isCurrent'] = true;
            }

            content.push(sectionDiv);
        }

        var navmenu = {
            isShow: isShowNav,
            content: content
        };

        this.sectionNav = navmenu;
    },
    GetCurSectionNav: function () {
        var _this = this;

        var sectionList = _this.sectionList
        var curSectionName=_this.currentSection;
        var len = sectionList.length;

        for (var i = 0; i < len; i++) {
            var one = sectionList[i];

            if (one.sectionName && one.sectionName === curSectionName) {
                return one;
            } 
        }

        return {};
    },
    BindPageEvent: function () {
        var _this = this;
        var pageData = _this.pageNav;
        var sectionNavs = _this.sectionNav['content'];

        $('#' + _this.pageFlag + '_topic').click(function () {
            var index = $(this).attr('index');
            _this.option.title = _this.title;
            _this.option.subtitle = '';
            _this.option.content = pageData[index].data.text;
            _this.InitPage($(this));
        });

        var fmData = this.fmData;
        var fmLen = fmData.length;

        for (var i = 0; i < fmLen; i++) {
            var pagesData = fmData[i]['pageData'];
            var pagesDataLen = pagesData.length;

            $('#' + _this.pageFlag + '_' + i).click(function () {
                var index = $(this).attr('index');
                _this.option.title = _this.title;
                _this.option.subtitle = pageData[index].page.subtitle;
                _this.option.content = pageData[index].data.text;
                _this.InitPage($(this));
                _this.InitAnswer();
                _this.SaveAnswer();
            });

        }
    },
    InitPage: function (JQEle) {
        var _this = this;
        _this.viewer.showTitle(_this.option.title);
        _this.viewer.showSubTitle(_this.option.subtitle);
        _this.viewer.showContent(_this.option.content);
        _this.viewer.initPapeNow(JQEle);
    },
    SaveAnswer: function () {
        var _this = this;

        $('input[name="choice"]').each(function (index, ele) {
            $(ele).on('focusout', function () {
                var eleVal = $(ele).val();
                var pageNum = $(ele).attr('flag');
                var key = _this.currentSection + '_' + pageNum + '_' + index;
                localdata.setItem(key, eleVal);
            });
        });
    },
    InitAnswer: function () {
        var _this = this;

        $('input[name="choice"]').each(function (index, ele) {
            var pageNum = $(ele).attr('flag');
            var key = _this.currentSection + '_' + pageNum + '_' + index;
            var val = localdata.getItem(key);
            $(ele).val(val);
        });
    }
};