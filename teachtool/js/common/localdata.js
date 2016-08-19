var localdata = {
    getItem: function (k) {
        return (!!window.localStorage) ? localStorage.getItem(k) : $.cookie(k);
    },
    setItem: function (k, v) {
        if (!!window.localStorage) {
            localStorage.setItem(k, v);
        } else {
            $.cookie(k, v, { path: '/', expires: 1000 });
        }
    },
    delItem: function (k) {
        if (!!window.localStorage) {
            localStorage.removeItem(k);
        } else {
            var date = new Date();
            date.setTime(date.getTime() - 10000);
            document.cookie = k + "=a; expires=" + date.toGMTString();
        }
    },
    clear: function () {
        if (!!window.localStorage) {
            localStorage.clear();
        } else {
            var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            if (keys) {
                var date = new Date();
                date.setTime(date.getTime() - 10000);
                for (var i =0;i< keys.length; i++)
                    document.cookie = keys[i] + "=a; expires=" + date.toGMTString();
            }
            
        }
    }
}