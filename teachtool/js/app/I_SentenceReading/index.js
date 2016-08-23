var Section_SentenceReading = {
    Viewer: new CommView(),
    SectionLst: [],
    ContentData: { Qustion: [], PageArr: [] },
    PageSize: 4,
    Render: function (sectionName) {
        var _this = this;
        //获取section数据
        var Data = Model.GetData(sectionName);
        if (!Data) {
            alert("获取数据失败");
            return;
        }
        _this.SectionLst = [];
        _this.ContentData = { Qustion: [], PageArr: [] };
        var title = Data.SectionData.Introduction;
        var subtitle = Data.SectionData.Title;
        subtitle = "<b class='orange'>" + subtitle;
        subtitle = subtitle.replace(":", "</b> ");
        _this.InitContentData(Data.SectionData.QuestionsList, Data.SectionData.Title);
        _this.InitSectionList(Data.SectionList);
        var contenthtml = new TemplateBuilder().getHtml("I_SentenceReading_title", { data: _this.ContentData.Qustion[0] });

        var option = {
            title: title,
            subtitle: subtitle,
            navmenu: {
                isShow: true,
                content: _this.SectionLst
            },
            content: contenthtml,
            navquestion: {
                isShow: true,
                content: _this.ContentData.PageArr
            }
        };
        this.Viewer.show(option);
        $("#sub_title").hide();
        this.BindEvent();
    },
    InitContentData: function (data, title) {
        var _this = this;
        for (var i = 0; i < data[0].QuestionList.length; i++) {
            data[0].QuestionList[i].Audiourl = data[0].RelativeUrl + "/" + data[0].QuestionList[i].modelAudio;
        }
        _this.ContentData.Qustion.push(title.replace("Section B:", ""));
        for (var i = 0; i < data[0].QuestionList.length; i += _this.PageSize) {
            _this.ContentData.Qustion.push(data[0].QuestionList.slice(i, i + _this.PageSize));
        }
        for (var i = 0; i < _this.ContentData.Qustion.length; i++) {
            _this.ContentData.PageArr.push({ attr: { id: 'P' + (i + 1), name: 'P' + (i + 1), text: i }, isCurrent: i == 0 });
        }

    },
    InitSectionList: function (data) {
        var _this = this;
        for (var i = 0; i < data.length; i++) {
            _this.SectionLst.push({ text: data[i].sectionText, attr: { id: data[i].sectionName, name: data[i].sectionName }, isCurrent: i == 1 });
        }

    },
    BindEvent: function () {
        var _this = this;
        for (var i = 0; i < _this.ContentData.PageArr.length; i++) {
            $("#" + _this.ContentData.PageArr[i].attr.id).click(function () {
                $("#nav_question").find("input").removeClass().addClass("btn-page");
                $(this).removeClass().addClass("btn-pagenow");
                var num = $(this).attr("text");
                var contenthtml = "";
                if (num == 0) {
                    contenthtml = new TemplateBuilder().getHtml("I_SentenceReading_title", { data: _this.ContentData.Qustion[0] });
                    $("#sub_title").hide();
                } else {
                    contenthtml = new TemplateBuilder().getHtml("I_SentenceReading", { list: _this.ContentData.Qustion[num] });
                    $("#sub_title").show();
                }
                _this.Viewer.showContent(contenthtml);
            });
        }
    }
};