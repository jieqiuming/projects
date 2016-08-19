var Section_ListenAndRetelling = {
    Viewer: new CommView(),
    SectionLst: [],
    ContentData: { Qustion: [], PageArr: [] },
    PageSize: 4,
    Render: function (sectionName) {
        var _this = this;
        //获取section数据
        var Data = Model.GetData(sectionName);
        console.log(Data);
        if (!Data) {
            alert("获取数据失败");
            return;
        }
        _this.SectionLst = [];
        _this.ContentData = { Qustion: [], PageArr: [] };
        var title = Data.SectionData.Introduction;
        _this.InitContentData(Data.SectionData.QuestionsList);
        _this.InitSectionList(Data.SectionList);
        var subtitle = "<b class='orange'>Section B</b>";
        //subtitle = "<b class='orange'>" + subtitle;
        //subtitle = subtitle.replace("<br />", "");
        //subtitle = subtitle.replace("B", "B</b> ");
        var contenthtml = new TemplateBuilder().getHtml("III_ListenAndRetelling", { data: _this.ContentData });

        var option = {
            title: title,
            subtitle: subtitle,
            navmenu: {
                isShow: true,
                content: _this.SectionLst
            },
            content: contenthtml,
            navquestion: {
                isShow: false,
                content: _this.ContentData.PageArr
            }
        };
        this.Viewer.show(option);

        $("#sub_title").hide();

        this.BindEvent();
    },
    InitContentData: function (data) {
        var _this = this;
        _this.ContentData = data[0].promptText.replace("Section B:", " ").replace("<br />","");
    },
    InitSectionList: function (data) {
        var _this = this;
        for (var i = 0; i < data.length; i++) {
            _this.SectionLst.push({ text: data[i].sectionText, attr: { id: data[i].sectionName, name: data[i].sectionName }, isCurrent: i == 1 });
        }

    },
    BindEvent: function () {
        var _this = this;
        //for (var i = 0; i < _this.SectionLst.length; i++) {
        //    $("#" + _this.SectionLst[i].attr.id).click(function () {
        //        $("#nav_menu").find("input").removeClass().addClass("btn-lightblue");
        //        $(this).removeClass().addClass("btn-blue");
        //        var hascode = $(this).attr("id");
        //        window.location.hash = "#" + hascode;
        //    });
        //}
    }
};