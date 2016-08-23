$(function () {
    //左边栏滚动
    var Sider = {
        index: 0,
        liCount: $("#orderDiv li").length,//总数
        pageIndex: 8,//一屏显示数
        liHeight: 76,//元素高度（固定）
        init: function () {
            this.liCount = $("#orderDiv li").length;
            if (this.liCount > this.pageIndex) {
                $("#scoll_down").show();
            }
        },
        siderScroll: function (direction, speed) {//p1:方向  p2:速度
            var _this = this;
            if (direction == "down") {
                if (_this.index + _this.pageIndex >= _this.liCount) {
                    return;
                }
                _this.index++;
                if (_this.index + _this.pageIndex >= _this.liCount) {
                    $("#scoll_down").hide();
                }
                $("#scoll_up").show();

            } else {
                if (_this.index <= 0) {
                    return;
                }
                _this.index--;
                if (_this.index <= 0) {
                    $("#scoll_up").hide();
                }
                $("#scoll_down").show();
            }        
            $("#orderDiv").animate({ scrollTop: _this.index * _this.liHeight }, speed);
        }
    }
    //00.初始化试卷数据
    init();
    function init() {
        //清除本地数据保存数据
        localdata.clear();

        var Request = comm.GetRequest();
        var paperId = Request["paperId"];
        //测试使用 2015.11.08 add by qmjie
        if (testData2) {
           comm.showMask(true, "页面加载中。。。");
           //testData2 = $.evalJSON(testData2);
           //TeachService.getPaperPackageData(paperId, function (result) {
           //});
           Model.InitData(testData2, function (flagList) {

               RenderLeftNavHtml(flagList);

               GotoSectionView(Model.GetDefaultSection());
               comm.showMask(false);
           });

        }
        
    };
    
    //00.动态生成左侧导航栏
    function RenderLeftNavHtml(flagList) {
        var flagName = {
            'I': 'Read aloud',
            'II': 'Quick response',
            'III': 'Listen, write and retell',
            'IV': 'Picture talk',
            'V': 'Group discussion',
            'VI': 'Listen and complete',
            'VII': 'Watch and talk'
        };
        var leftNavHtml = '';
        var sectionName = '';
        var liHtmlTpl = '<li class="clearfix {3}" hashvalue="{0}"><b>{1}</b><p><font><span>{2}</span></font></p></li>';
        var i = 0;
        for (var section in flagList) {
            sectionName = flagList[section][0].sectionName;
            var flagNum = sectionName.slice(sectionName.lastIndexOf("_") + 1);
            var className = i == 0 ? 'current' : '';

            leftNavHtml += String.format(liHtmlTpl, sectionName, flagNum, flagName[flagNum], className);
            i++;
        }

        $('#orderDiv').html(leftNavHtml);
        Sider.init();
    }

    
    
    //01.进入section视图
    function GotoSectionView(defaultSection) {
        //如有hash值，则进入hash对应的section，否则首页默认进入第一个section视图
        var hashvalue = window.location.hash ? window.location.hash.slice(1) : defaultSection;

        route(hashvalue);
    }

    //02.路由功能，负责视图切换,
    //hashvalue = {0}_Flag_{1} {0}为SectionName {1}为Flag
    //update by qmjie 2015.11.16 
    function route(hashvalue) {
        var sectionName = hashvalue.slice(0, hashvalue.indexOf('_Flag_'));
        var folder = PaperSections.getKeyByValue(sectionName);
        var sectionObj = 'Section_' + sectionName;
        if (!window[sectionObj]) {
            BuildLibrary.appendJS('js/app/' + folder + '/index.js', "UTF-8", function () {
                window[sectionObj].Render(hashvalue);
            });
        } else {
            window[sectionObj].Render(hashvalue);
        }
    }

    //03.hash变化响应事件
    // $(window).bind("hashchange", function (e) {
    //     //hash发生改变，更改状态
    //     var hashvalue = window.location.hash.slice(1);
    //     route(hashvalue);
    // });

    //03.1 popstate事件
    $(window).on("popstate", function() {
        var hashvalue = history.state?history.state.id:Model.GetDefaultSection();
        route(hashvalue);                            
    });

    //04.侧边导航栏点击事件
    $("#orderDiv").on("click", "li", function (e) {

        $("#main").trigger("stopPlayAndReord");

        $("#orderDiv li").removeClass("current");

        var $this = $(e.currentTarget);

        $this.addClass("current");

        //方法一：设置hash值,与hashchange事件一起使用
        var hashValue = $this.attr("hashValue");
        //window.location.hash = "#" + hashValue;

        //方法二：利用HTML5的HistoryAPI pushState
        window.history.pushState({"id":hashValue},'',"index.html?id="+hashValue);
        route(hashValue);
    });
});