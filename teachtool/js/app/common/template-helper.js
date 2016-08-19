/*
 * 在模板中使用：{{time | dateFormat:'yyyy-MM-dd hh:mm:ss'}}
 */
template.helper('dateFormat', function (date, format) {
    date = new Date(date);
    var map = {
        "M": date.getMonth() + 1, //月份 
        "d": date.getDate(), //日 
        "h": date.getHours(), //小时 
        "m": date.getMinutes(), //分 
        "s": date.getSeconds(), //秒 
        "q": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
        var v = map[t];
        if (v !== undefined) {
            if (all.length > 1) {
                v = '0' + v;
                v = v.substr(v.length - 2);
            }
            return v;
        }
        else if (t === 'y') {
            return (date.getFullYear() + '').substr(4 - all.length);
        }
        return all;
    });
    return format;
});

template.helper('blankFormat', function (str) {
    var num = '';
    //str = str.replace('[___]', '<input type="text" class="replace_input2" value="' + num + '" onfocus="if (value ==\'' + num + '\'){value =\'\'}" onblur="if (value ==\'\'){value=\'' + num + '\'}" />');
    //由于js没有replaceAll方法，所以使用其他方式处理替换
    str = str.split('[___]').join('<input type="text" class="replace_input2" value="' + num + '" onfocus="if (value ==\'' + num + '\'){value =\'\'}" onblur="if (value ==\'\'){value=\'' + num + '\'}" />');
    return str;
});

template.helper('textAreaFormat', function (str, className) {
    if (className == '' || className == undefined)
        className = 'replace_textarea';//默认样式
    str = str.split('[___]').join('<textarea class="' + className + '" name=""></textarea>');
    return str;
});

template.helper('optionsFormat', function (str, index) {
    var letters = [];
    for (var i = 65; i < 91; i++) {
        letters.push(String.fromCharCode(i));
    }
    if (index <= letters.length - 1) {
        return letters[index] + '. ' + str;
    }
    else {
        return letters[letters.length - 1] + '. ' + str;
    }
});

template.helper('answerFormat', function (str) {
    var answers = str.split('##');
    for (var i = 0; i < answers.length; i++) {
        if (answers[i] != '') {
            answers[i] = (i + 1).toString() + '. ' + answers[i];
        }
    }
    return answers.join('<br />');
});

/*备用*/
template.helper('flvPlayer', function (url) {
    return '<object type="application/x-shockwave-flash" width="781" height="368" wmode="transparent" data="scripts/TeachTool/flvplayer.swf?file=' + url + '&autostart=false&image=images/TeachTool/img2.png"><param name="movie" value="scripts/TeachTool/flvplayer.swf?file=' + url + '&autostart=false&image=images/TeachTool/img2.png" /><param name="wmode" value="transparent" /></object>';
});

/*判断对象*/
template.helper('isObject', function (data) {
    if (data) {
        return data.constructor === Object
    }
    return false;
});

/*判断数组*/
template.helper('isArray', function (data) {
    if (data) {
        return data.constructor === Array
    }
    return false;
});

/*判断数组*/
template.helper('replaceInput', function (text, flag) {
    if (text) {
        return text.replace(/\/input\//g, '<input class="empty-input2" style="width: 80px;" name="choice" flag="' + flag + '" type="text" value=""/>');
    }

    return text;
});


template.helper('numToChar',function (index) {
    var num = 65 + index;
    var char = String.fromCharCode(num);
    return char;
});


