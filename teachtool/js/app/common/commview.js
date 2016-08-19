
/**
 *需要jquery
 */
var CommView = (function () {
    var option = {
        title: '',
        subtitle: '',
        navmenu: {
            isShow: false,
            content: [
                { text: 'sectionA', attr: { id: "A", name: "A" } },
                { text: 'sectionB', attr: { id: "B", name: "B" } }
            ]
        },
        content: '',
        navquestion: { isShow: false, content: [] }
    };

    var CommView = function () {
        //标题
        this.title = $('#title');
        //副标题
        this.subtitle = $('#sub_title');
        //左上菜单导航区
        this.navmenu = $('#nav_menu');
        //内容
        this.content = $('#content');
        //问题导航区
        this.navquestion = $('#nav_question');

        this.option = option;
    };

    CommView.prototype.show = function (option) {
        var _this = this;
        _this.option = option;//$.extend(_this.option, option);
        var _option = _this.option;

        _this.showTitle(_option.title);

        if (_option.subtitle) {
            _this.subtitle.show();
            _this.showSubTitle(_option.subtitle);
        } else {
            _this.subtitle.hide();
        }

        if (_option.content) {
            _this.showContent(_option.content);
        }

        if (_option.navmenu && _option.navmenu.isShow) {
            _this.navmenu.show();
            var html = _this.getNavMenuHtml();
            _this.showNavMenu(html);
        } else {
            _this.navmenu.hide();
        }

        if (_option.navquestion && _option.navquestion.isShow) {
            _this.navquestion.show();
            var html = _this.getNavQuestionHtml();
            _this.showNavQuestion(html);
        } else {
            _this.navquestion.hide();
        }
    };

    CommView.prototype.getNavMenuHtml = function () {
        var _this = this;
        var html = '';
        var navMenu = _this.option.navmenu.content;
        if (navMenu instanceof Array) {
            var len = navMenu.length;
            for (var i = 0; i < len; i++) {
                var item = navMenu[i];
                html += _this.navMenuItem(item);
            }
        }
        return html;
    }

    CommView.prototype.navMenuItem = function (data) {
        var val = data['text'];
        var pros = data['attr'];

        var isCurrent = data['isCurrent'];

        var html = '<input type="button" ';

        if (isCurrent) {
            html += ' class="btn-blue" ';
        } else {
            html += ' class="btn-lightblue" ';
        }

        var attrHtml = '';
        for (var p in pros) {
            attrHtml += p + '="' + pros[p] + '"';
        }
        attrHtml += 'value="' + val + '"';
        html += attrHtml + ' />';
        return html;
    }

    CommView.prototype.getNavQuestionHtml = function () {
        var _this = this;
        var html = '';
        var navQuestion = _this.option.navquestion.content;
        if (navQuestion instanceof Array) {
            var len = navQuestion.length;
            for (var i = 0; i < len; i++) {
                var item = navQuestion[i];
                html += _this.navQuestionItem(item);
            }
        }
        return html;
    }

    CommView.prototype.navQuestionItem = function (data) {
        var html = '<input type="button" nav="questionPage" value="" ';
        var attrHtml = '';
        var pros = data['attr'];
        var isCurrent = data['isCurrent'];
        if (isCurrent) {
            html += ' class="btn-pagenow" '
        } else {
            html += ' class="btn-page" '
        }
        for (var p in pros) {
            attrHtml += p + '="' + pros[p] + '"';
        }

        html += attrHtml + ' />';

        return html;
    }


    //展示内容
    CommView.prototype.showContent = function (html) {
        var _this = this;
        _this.content.html(html);
    };

    //展示标题
    CommView.prototype.showTitle = function (html) {
        var _this = this;
        _this.title.html(html);
    };

    //展示标题
    CommView.prototype.showNavMenu = function (html) {
        var _this = this;
        _this.navmenu.html(html);
    };

    //展示副标题栏
    CommView.prototype.showSubTitle = function (html) {
        var _this = this;
        if (html) {
            var stHtml = '';
            //var arr = html.split('&nbsp;');
            //var len = arr.length;
            //if (len > 1) {
            //    stHtml = '<b class="orange">' + arr[0] + '</b>';
            //    for (var i = 1; i < len; i++) {
            //        stHtml += arr[i];
            //    }
            //} else {
                stHtml = html;
            //}
            
            html = '<font>' + stHtml + '</font>';
            _this.subtitle.show().html(html);
        } else {
            _this.subtitle.css({ display: 'none' }).hide();
        }

    };

    //显示问题导航
    CommView.prototype.showNavQuestion = function (html) {
        var _this = this;
        _this.navquestion.html(html);
    };

    CommView.prototype.initPapeNow = function (jqObj) {
        //恢复当前样式
        $('.paperpage>input').removeClass().addClass("btn-page");
        jqObj.removeClass().addClass('btn-pagenow');
    };

    CommView.prototype.getTplHtml = function (tplname, data) {
        var contenthtml = new TemplateBuilder().getHtml(tplname, data);
        return contenthtml;
    };

    CommView.prototype.NumToChar = function (index) {
        var num = 65 + index;
        var char = String.fromCharCode(num);
        return char;
    };

    CommView.prototype.FormatChoices = function (choiceArr) {
        var _this = this;
        if (choiceArr instanceof Array) {
            var len = choiceArr.length;
            for (var i = 0; i < len; i++) {
                var item = choiceArr[i];
                choiceArr[i] = _this.NumToChar(i) + '.' + item;
            }
        }
        return choiceArr;
    };
    CommView.prototype.FormatAnswer = function (data) {
        var _this = this;
        if (data) {
            var answerInfo = '';
            var answerArr = data.split('|');
            var answerLen = answerArr.length;
            var questionNum = 1;
            for (var i = 0; i < answerLen; i++) {
                if (answerArr[i] >= 0) {
                    answerInfo += (questionNum++) + '.' + _this.NumToChar(parseInt(answerArr[i])) + '</br>';
                }
            }
            return answerInfo;
        }
        return data;
    };

    CommView.prototype.FormatAnswerToArr = function (data) {
        var _this = this;
        if (data) {
            var answerArr = data.split('|');
            return answerArr;
        }
        return data;
    };

    return CommView;
})()
