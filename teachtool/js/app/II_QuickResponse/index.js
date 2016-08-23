var Section_QuickResponse = {
    Viewer: new CommView(),
    SectionLst: [],
    ContentData: { Qustion: [], PageArr: [] },
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
        var contenthtml = new TemplateBuilder().getHtml("II_QuickResponse_title", { data: _this.ContentData.Qustion[0] });

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
            data[0].QuestionList[i].audiourl = data[0].RelativeUrl + "/" + data[0].QuestionList[i].modelAudio;
        }
        _this.ContentData.Qustion.push(title.replace("Section A:", ""));

        _this.ContentData.Qustion.push(data[0].QuestionList);

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
                    contenthtml = new TemplateBuilder().getHtml("II_QuickResponse_title", { data: _this.ContentData.Qustion[0] });
                    $("#sub_title").hide();
                } else {
                    contenthtml = new TemplateBuilder().getHtml("II_QuickResponse", null);
                    $("#sub_title").show();
                }
                _this.Viewer.showContent(contenthtml);
                _this.BindBtnEvent();
            });
        }
    },
    CreatePaperHtml: function (question) {
        var html = "";
        html += '<li style="display:none" class="clearfix">';
        html += '<em>' + question.index + '</em>';
        html += '<div class="text"><font>' + question.content + '</font></div>';
        html += '<div class="btn">';
        html += '<input type="button" class="btn-play"  name="btn_audio" audioUrl="' + question.audiourl + '" value="" /><input type="button" name="btn_voice" controlid="' + question.controlid + '" voicetime="' + question.answertime + '" class="btn-voice" value="" /><input type="button" name="btn_refresh" class="' + question.refreshClass + '" audiourl="' + question.refreshAudio + '"  value="" /></div>';
        html += '</li>';
        return html;
    },
    BindBtnEvent: function () {
        var _this = this;
        var qustion = _this.ContentData.Qustion[1];
        $("#start").click(function () {
            $(this).parent().parent().hide();
            $("#next").attr("idx", qustion[0].index).parent().show();
            $("#ul_paperList").show();
            var html = Section_QuickResponse.CreatePaperHtml(qustion[0]);
            $("#ul_paperList").html(html);
            $("#ul_paperList li:eq(0)").slideToggle(300);
        });
        $("#next").click(function () {
            $("#start").parent().parent().hide();
            var index = $(this).attr("idx");
            if (parseInt(index) + 1 >= qustion.length) {
                $(this).parent().hide();
            }
            $(this).attr("idx", qustion[index].index);
            var html = Section_QuickResponse.CreatePaperHtml(qustion[index]);
            $("#ul_paperList").append(html);
            $("#ul_paperList li:eq(" + index + ")").slideToggle(300);
        });
    }
};