var Section_WatchAndTalk = {
    _RelativeUrl: "",
    Viewer: new CommView(),
    _SectionName: "WatchAndTalk",
    Render: function (sectionName) {
        console.log("-------------WatchAndTalk-------------");
        this._SectionName = sectionName;
        //获取section数据
        var sectionData = Model.GetData(this._SectionName);

        var styleClass = null;
        for (var i = 0; i < sectionData.SectionList.length; i++) {
            var styleClass = this._SectionName == sectionData.SectionList[i].sectionName ? "btn-blue" : "btn-lightblue";
            sectionData.SectionList[i].sectionClass = styleClass;
        }

        //解析sectionData
        this._RelativeUrl = sectionData.SectionData.QuestionsList[0].RelativeUrl;

        var talkImg = sectionData.SectionData.QuestionsList[0].QuestionList[0].topicContent;
        //if (talkImg.indexOf(this._RelativeUrl) == -1) {
        //    sectionData.SectionData.QuestionsList[0].topicContent = String.format('{0}\\{1}', this._RelativeUrl, talkImg);
        //}

        //this.ShowTitle(sectionData.SectionData.Introduction);

        //this.ShowSectionMenu(sectionData.SectionList);
        this.ShowHtml(sectionData);

        //$("#orderDiv li").removeClass("current");
        //$("#orderDiv li[hashvalue='" + this._SectionName + "']").addClass("current");
    },
    ShowHtml: function (sectionData) {
        var subtitle = sectionData.SectionData.QuestionsList[0].promptText;
        var navMenuHtml = "";
        var formatSection = '<input type="button" class="{0}" value="{1}" name="{2}">';
        for (var i = 0; i < sectionData.SectionList.length; i++) {
            navMenuHtml += String.format(formatSection, sectionData.SectionList[i].sectionClass, sectionData.SectionList[i].sectionText, sectionData.SectionList[i].sectionName);
        }

        //contentHtml
        var contentHtml = new TemplateBuilder().getHtml("WatchAndTalk", { SectionList: sectionData.SectionList, SectionData: sectionData.SectionData });


        var pageHtml = [];

        //显示头部
        var option = {
            title: sectionData.SectionData.Introduction,
            subtitle: subtitle,
            navmenu: {
                isShow: false,
                content: []
            },
            content: contentHtml,
            navquestion: {
                isShow: true,
                content: pageHtml
            }
        };
        this.Viewer.show(option);

        //pageHtml = '<input type="button" class="btn-pagenow" value="" pagevalue="pageOne"><input type="button" class="btn-page" value="" pagevalue="pageTwo">'
        //$("#nav_question").html(pageHtml);
        //$("#nav_menu").html(navMenuHtml);
    }
};