var Section_PictureAndTalking = {
    _RelativeUrl: "",
    Viewer: new CommView(),
    _SectionName: "PictureAndTalking",
    Render: function (sectionName) {
        console.log("-------------PictureAndTalking-------------");
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
        for (var j = 0; j < sectionData.SectionData.QuestionsList[0].QuestionList.length; j++) {
            var audioUrl = sectionData.SectionData.QuestionsList[0].QuestionList[j].topicAudio;
            if (audioUrl.indexOf(this._RelativeUrl) == -1) {
                sectionData.SectionData.QuestionsList[0].QuestionList[j].topicAudio = String.format('{0}\\{1}', this._RelativeUrl, audioUrl);
            }
        }
        
        var talkImg = sectionData.SectionData.QuestionsList[0].QuestionList[0].topicContent;
        var stepText = "Step 2";
        if (talkImg.indexOf(stepText) == 0) {
            talkImg = talkImg.slice(stepText.length);
            sectionData.SectionData.QuestionsList[0].QuestionList[0].topicContent = talkImg;
        }
        this.ShowHtml(sectionData);
    },
    ShowHtml: function (sectionData) {
        var subtitle = sectionData.SectionData.QuestionsList[0].promptText;
        var navMenuHtml = "";
        var formatSection = '<input type="button" class="{0}" value="{1}" name="{2}">';
        for (var i = 0; i < sectionData.SectionList.length; i++) {
            navMenuHtml += String.format(formatSection, sectionData.SectionList[i].sectionClass, sectionData.SectionList[i].sectionText, sectionData.SectionList[i].sectionName);
        }

        //contentHtml
        var contentHtml = new TemplateBuilder().getHtml("IV_PictureAndTalking", { SectionList: sectionData.SectionList, SectionData: sectionData.SectionData });


        var pageHtml = [];

        //显示头部
        var option = {
            title: sectionData.SectionData.Introduction,
            subtitle: subtitle,
            navmenu: {
                isShow: true,
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
        $("#nav_menu").html(navMenuHtml);
    },
    ShowTitle: function (title) {
        $("#title").html(title);
    },
    ShowSectionMenu: function (sectionList) {
        var menuHtml = "";
        var styleClass = "";

        var menuItemTpl = '<input type="button" class="{0}" value="{1}" hashvalue="{2}">';
        for (var i = 0; i < sectionList.length; i++) {
            styleClass = this._SectionName == sectionList[i].sectionName ? "btn-blue" : "btn-lightblue";
            menuHtml += String.format(menuItemTpl, styleClass, sectionList[i].sectionText, sectionList[i].sectionName);
        }
        $("#nav_menu").html(menuHtml);
    }
};