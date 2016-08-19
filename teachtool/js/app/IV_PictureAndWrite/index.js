var Section_PictureAndWrite = {
    Viewer: new CommView(),
    _RelativeUrl: "",
    _SectionName: "PictureAndWrite",
    _PromptText: "",
    _StepText: "",
    Render: function (sectionName) {
        console.log("-------------PictureAndWrite-------------");
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

        var talkImg = sectionData.SectionData.QuestionsList[0].topicContent;
        if (talkImg.indexOf(this._RelativeUrl) == -1) {
            sectionData.SectionData.QuestionsList[0].topicContent = String.format('{0}\\{1}', this._RelativeUrl, talkImg);
        }

        this.ShowHtml(sectionData);
        //$("#orderDiv li").removeClass("current");
        //$("#orderDiv li[hashvalue='" + this._SectionName + "']").addClass("current");
        this.BindEvent();
    },
    ShowHtml: function (sectionData) {
        var subtitle = sectionData.SectionData.QuestionsList[0].promptText;
        this._PromptText = sectionData.SectionData.QuestionsList[0].promptText;
        this._StepText = sectionData.SectionData.QuestionsList[0].stepText;
        var navMenuHtml = "";
        var formatSection = '<input type="button" class="{0}" value="{1}" name="{2}">';
        for (var i = 0; i < sectionData.SectionList.length; i++) {
            navMenuHtml += String.format(formatSection, sectionData.SectionList[i].sectionClass, sectionData.SectionList[i].sectionText, sectionData.SectionList[i].sectionName);
        }

        var answerText = sectionData.SectionData.QuestionsList[0].QuestionList[0].answerText;
        var answerArr = answerText.split("##");
        //var reg = /d+.\s*/g;//特殊处理，如果前面已经包含序号，那么不再需要添加序号
        //for (var i = 0; i < answerArr.length; i++) {
        //    if (!reg.test(answerArr[i]))
        //    {
        //        answerArr[i] = String.format('{0}. {1}', i + 1, answerArr[i]);
        //    }
        //}
        sectionData.SectionData.QuestionsList[0].QuestionList[0].answerText = answerArr.join("<br/>");

        //contentHtml
        var contentHtml = new TemplateBuilder().getHtml("IV_PictureAndWrite", { SectionList: sectionData.SectionList, SectionData: sectionData.SectionData });


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

        pageHtml = '<input type="button" class="btn-pagenow" value="" pagevalue="page0"><input type="button" class="btn-page" value="" pagevalue="page1">'
        $("#nav_question").html(pageHtml);
        $("#nav_menu").html(navMenuHtml);
    },
    BindEvent: function () {
        

        $("#main").on("click", ".paperpage input[pagevalue^=page]", function (e) {
            var pagevalue = $(e.currentTarget).attr("pagevalue");
            if (!pagevalue) {
                return;
            }
            $("#main").find(".picturepagelist").hide();
            $("#" + pagevalue).show();
            if (pagevalue == "page0") {
                $("#sub_title font").html(Section_PictureAndWrite._PromptText);
            }
            else {
                $("#sub_title font").html(Section_PictureAndWrite._StepText);
            }
            //分页小圆圈样式切换

            $("input.btn-pagenow")[0].className = "btn-page";
            $(e.currentTarget)[0].className = "btn-pagenow";
        });

        //输入框事件
        $("#main").on("blur", "textarea[name='textAnswer']", function (e) {
            var $this = $(e.currentTarget);
            
            localdata.setItem($this.attr("textid"), $this.val());
        });
    }
};