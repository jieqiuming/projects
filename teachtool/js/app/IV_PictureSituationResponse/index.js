var Section_PictureSituationResponse = {
    Viewer: new CommView(),
    _SectionName: "PictureSituationResponse",
    _RelativeUrl: "",
    _PromptText:"",
    _StepText:"",
    Render: function (sectionName) {
        console.log("-------------PictureSituationResponse-------------");

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

        for (var j = 0; j < sectionData.SectionData.QuestionsList[0].QuestionList.length; j++) {
            var audioUrl = sectionData.SectionData.QuestionsList[0].QuestionList[j].questionAudio;
            if (audioUrl.indexOf(this._RelativeUrl) == -1) {
                sectionData.SectionData.QuestionsList[0].QuestionList[j].questionAudio = String.format('{0}\\{1}', this._RelativeUrl, audioUrl);
            }
        }

        //数据重组，默认显示4个questions，如果超过4个那么就要分成多个小圆圈页显示数据
        var length = sectionData.SectionData.QuestionsList[0].QuestionList.length;
        var pageNum = Math.ceil(length / 4);
        var newQuestionList = [];
        for (var k = 0; k < pageNum; k++) {
            var start = 4 * k;
            var end = 4 * (k + 1);
            newQuestionList.push(sectionData.SectionData.QuestionsList[0].QuestionList.slice(start, end));
        }
        sectionData.SectionData.QuestionsList[0].PageQuestionList = newQuestionList;

        this.ShowHtml(sectionData);

        this.BindEvent();
    },
    ShowHtml: function (sectionData) {
        var subtitle = sectionData.SectionData.QuestionsList[0].promptText;
        this._PromptText = sectionData.SectionData.QuestionsList[0].promptText;
        this._StepText = sectionData.SectionData.QuestionsList[0].stepText;
        var navMenuHtml = "";
        var formatSection = '<input type="button" class="{0}" value="{1}" name="{2}">';
        for(var i=0;i<sectionData.SectionList.length;i++){
            navMenuHtml += String.format(formatSection, sectionData.SectionList[i].sectionClass, sectionData.SectionList[i].sectionText, sectionData.SectionList[i].sectionName);
        }



        //contentHtml
        var contentHtml = new TemplateBuilder().getHtml("IV_PictureSituationResponse", { SectionList: sectionData.SectionList, SectionData: sectionData.SectionData });


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

        var length = sectionData.SectionData.QuestionsList[0].PageQuestionList.length;
        pageHtml.push('<input type="button" class="btn-pagenow" value="" pagevalue="page0">');
        for (var kk = 0; kk < length; kk++) {
            pageHtml.push('<input type="button" class="btn-page" value="" pagevalue="page'+(kk+1)+'">');
        }

        $("#nav_question").html(pageHtml.join(''));
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
                $("#sub_title font").html(Section_PictureSituationResponse._PromptText);
            }
            else {
                $("#sub_title font").html(Section_PictureSituationResponse._StepText);
            }
            //分页小圆圈样式切换
            $("input.btn-pagenow")[0].className = "btn-page";
            $(e.currentTarget)[0].className = "btn-pagenow";
        });
    }
};