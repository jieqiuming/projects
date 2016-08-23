var Section_GroupDiscussion = {
    name: 'V_GroupDiscussion',
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
                isShow: false,
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
        console.log('-------VI_GroupDiscussion-------');
        console.log(data);
        var sectionData = data['SectionData'];
        var itemData = sectionData['QuestionsList'];
        this.fmData = new Array();

        //格式化答案和音频路径
        var itemLen = itemData.length;
        for (var i = 0; i < itemLen; i++) {
            var tempQuestion = itemData[i];
            var questions = tempQuestion['QuestionList'];
            var questionsLen = questions.length;
            var relationUrl = tempQuestion['RelativeUrl'];
            this.pageCount += questionsLen / this.pageSize;
            var pagesData = {};
            var pageData = new Array();
            console.log(i);
            console.log(questions);
            for (var j = 0; j < questionsLen; j++) {
                var pageIndex = Math.floor(j / this.pageSize);
                var question = questions[j];

                questions[j]['num'] = j + 1;
				questions[j]['relationUrl'] = relationUrl;
                var topicContent = questions[j]['topicContent'];
                var passages = topicContent.split('<br />');
                questions[j]['contents'] = passages;

                if (pageData[pageIndex] instanceof Array) {
                    pageData[pageIndex].push(questions[j]);
                } else {
                    pageData[pageIndex] = new Array();
                    pageData[pageIndex].push(questions[j]);
                }
            }
           
            itemData[i]['relationUrl'] = relationUrl;
            itemData[i]['QuestionList'] = questions;
            pagesData = itemData[i];
            pagesData['audio'] = itemData[i]['promptAudio'];
            pagesData['text'] = itemData[i]['promptText'];
            pagesData['pageData'] = pageData;
            this.fmData.push(pagesData);
            console.log('格式化后的数据');
            console.log(this.fmData);
        }
        this.sectionData = sectionData;
        this.itemData = itemData;
        this.sectionList = data['SectionList'];
    },
    FormateData: function () {
        var _this = this;
        var secData = _this.sectionData;
        var itemData = _this.itemData;
        var sectionList = _this.sectionList;
        //标题
        this.title = secData['Introduction'];

        var subtitle = itemData[0]['promptText'];
        var promptAudio = itemData[0]['promptAudio'];
        //副标题
        this.subtitle = subtitle;
        //section导航区
        _this.InitNavSection();

        //首页数据整理
        var isFirst = _this.IsFirstSection();
        this.pageNav = new Array();
        var index = this.pageNav.length;
        var pageNow = true;

        //_this.itemData[0]['currentSectionNav'] = _this.GetCurSectionNav();
        //this.pageNav.push({ attr: { id: this.pageFlag + '_topic', index: index++ }, data: { text: _this.viewer.getTplHtml(this.name + '_topic', _this.itemData[0]) }, isCurrent: pageNow });

        var fmData = this.fmData;
        var fmLen = fmData.length;

        for (var i = 0; i < fmLen; i++) {
            var fm = fmData[i];
            var pagesData = fm['pageData'];
            var pagesDataLen = pagesData.length;
            for (var j = 0; j < pagesDataLen; j++) {
                var pageData = pagesData[j];
                this.pageNav.push({
                    attr: { id: this.pageFlag + '_' + i + '_' + j, index: index++ },
                    data: { text: _this.viewer.getTplHtml(this.name + '_content', { questions: pageData,titles:_this.itemData[0] }) },
                    page: fm
                });
            }
        }
    },
    InitNavSection: function () {
        var _this = this;
        var sectionList = this.sectionList;
        var len = sectionList.length;
        var content = new Array();
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
            isShow: false,
            content: content
        };

        this.sectionNav = navmenu;
    },
    IsFirstSection: function (curSec) {
        var _this = this;

        if (!curSec) {
            curSec = _this.currentSection;
        }

        var sectList = _this.sectionList;
        if (sectList instanceof Array) {
            if (sectList.length > 0) {
                var secName = sectList[0]['sectionName'];
                if (secName === curSec) {
                    return true;
                }
            }
        }
        return false;
    },
    GetCurSectionNav: function () {
        var _this = this;

        var sectionList = _this.sectionList
        var curSectionName = _this.currentSection;
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

        //$('#' + _this.pageFlag + '_topic').click(function () {
        //    var index = $(this).attr('index');
        //    _this.option.title = _this.title;
        //    _this.option.subtitle = '';
        //    _this.option.content = pageData[index].data.text;
        //    _this.InitPage($(this));
        //});

        var fmData = this.fmData;
        var fmLen = fmData.length;
        for (var i = 0; i < fmLen; i++) {
            var pagesData = fmData[i]['pageData'];
            var pagesDataLen = pagesData.length;
            for (var j = 0; j < pagesDataLen; j++) {
                $('#' + _this.pageFlag + '_' + i + '_' + j).click(function () {
                    var index = $(this).attr('index');
                    _this.option.title = _this.title;
                    _this.option.subtitle = '';
                    _this.option.content = pageData[index].data.text;
                    _this.InitPage($(this));
                });
            }
        }
    },
    InitPage: function (JQEle) {
        var _this = this;
        _this.viewer.showTitle(_this.option.title);
        _this.viewer.showSubTitle(_this.option.subtitle);
        _this.viewer.showContent(_this.option.content);
        _this.viewer.initPapeNow(JQEle);
    }
};