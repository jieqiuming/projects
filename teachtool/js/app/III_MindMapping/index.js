var Section_MindMapping = {
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
        var subtitle = Data.SectionData.QuestionsList[0].promptText;
        //subtitle = "<b class='orange'>" + subtitle;
        //subtitle = subtitle.replace("A", "A</b> ");
        _this.InitContentData(Data.SectionData.QuestionsList, Data.SectionData.QuestionsList[0].promptText);
        _this.InitSectionList(Data.SectionList);
        var contenthtml = new TemplateBuilder().getHtml("III_MindMapping_title", { data: _this.ContentData.Qustion[0] });

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
        var promptAudio = data[0].RelativeUrl + "/" + data[0].promptAudio;
        var passageAudio = data[0].RelativeUrl + "/" + data[0].QuestionList[0].passageAudio;
        var aswerText = data[0].QuestionList[0].answerText.split("##");
        var passageText = data[0].QuestionList[0].passageText;
        var imageurl = data[0].RelativeUrl + "/" + data[0].QuestionList[0].questionContent;
        var controlid = data[0].QuestionList[0].controlid;

        var userAswer = [];
        for (var i = 0; i < aswerText.length; i++) {
            userAswer.push(localdata.getItem(controlid + (i + 1)));
        }

        _this.ContentData.Qustion.push({ title: title.replace("Section A", ""), promptAudio: promptAudio });
        _this.ContentData.Qustion.push({ passageAudio: passageAudio, AswerText: aswerText, UserAswer: userAswer, passageText: passageText, ImageUrl: imageurl, Controlid: controlid });

        for (var i = 0; i < _this.ContentData.Qustion.length; i++) {
            _this.ContentData.PageArr.push({ attr: { id: 'P' + (i + 1), name: 'P' + (i + 1), text: i }, isCurrent: i == 0 });
        }


    },
    InitSectionList: function (data) {
        var _this = this;
        for (var i = 0; i < data.length; i++) {
            _this.SectionLst.push({ text: data[i].sectionText, attr: { id: data[i].sectionName, name: data[i].sectionName }, isCurrent: i == 0 });
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
                    contenthtml = new TemplateBuilder().getHtml("III_MindMapping_title", { data: _this.ContentData.Qustion[0] });
                    $("#sub_title").hide();
                } else {
                    var userAswer = [];
                    for (var i = 0; i < _this.ContentData.Qustion[1].AswerText.length; i++) {
                        userAswer.push(localdata.getItem( _this.ContentData.Qustion[1].Controlid + (i + 1)));
                    }
                    _this.ContentData.Qustion[1].UserAswer = userAswer;
                    contenthtml = new TemplateBuilder().getHtml("III_MindMapping", { data: _this.ContentData.Qustion[1] });
                    $("#sub_title").show();
                }
                _this.Viewer.showContent(contenthtml);
                _this.BindBtnEvent();
            });
        }
    }, 
    BindBtnEvent: function () {
        var _this = this;
        $("#btn_answer").click(function () {
            comm.showMask(true);
            var popY = ($(window).height() - $("#pop_answer").height()) / 2;
            var popX = ($(window).width() - $("#pop_answer").width()) / 2;
            $("#pop_answer").css("top", popY).css("left", popX).show();
        });
        $("#btn_passageText").click(function () {
            comm.showMask(true);
            var popY = ($(window).height() - $("#pop_passageText").height()) / 2;
            var popX = ($(window).width() - $("#pop_passageText").width()) / 2;
            $("#pop_passageText").css("top", popY).css("left", popX).show();
        });
        $("input[name='pop_passageText_close']").click(function () {
            comm.showMask(false);
            $("#pop_passageText").hide();
        });
        $("input[name='pop_answer_close']").click(function () {
            comm.showMask(false);
            $("#pop_answer").hide();
        });
        //保存用户填空
        $("input[name='input_answer']").blur(function () {
            var controlid = $(this).attr("controlid");
            var value = $(this).val();
            localdata.setItem(controlid, value);
        });
    }
};