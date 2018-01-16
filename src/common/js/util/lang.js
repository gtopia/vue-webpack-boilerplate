var U = {
    name: 'Lang',
    version: 1.0
};

U.strLen = function(str) {
    return str.replace(/[^\x00-\xff]/g, '**').length;
};

U.formatTime = function(time, semantic, isShowHMS) {
    time = +time;
    var nowTime;
    var diff;
    var fTime;
    var dateObj;

    if (!semantic) {
        dateObj = new Date(time);

        if (isShowHMS) {
            fTime = dateObj.getFullYear() + '-' + U.completeZero(dateObj.getMonth() + 1) + '-' + U.completeZero(dateObj.getDate()) + ' ' + U.completeZero(dateObj.getHours()) + ':' + U.completeZero(dateObj.getMinutes()) + ':' + U.completeZero(dateObj.getSeconds());
        }
        else {
            fTime = dateObj.getFullYear() + '-' + U.completeZero(dateObj.getMonth() + 1) + '-' + U.completeZero(dateObj.getDate());
        }
    } else {
        nowTime = Date.now();
        diff = nowTime - time;
        if (diff < 0) {
            // 客户端时间错误
            dateObj = new Date(time);
            fTime = U.completeZero(dateObj.getMonth() + 1) + '-' + U.completeZero(dateObj.getDate()) + ' ' + U.completeZero(dateObj.getHours()) + ':' + U.completeZero(dateObj.getMinutes());
        } else if (diff < 60 * 1000) {
            // 1分钟内
            fTime = '一分钟内';
        } else if (diff < 60 * 60 * 1000) {
            // 一小时内
            fTime = (diff / 60 / 1000 | 0) + '分钟前';
        } else if (diff < 24 * 60 * 60 * 1000) {
            // 一天内
            fTime = (diff / 60 / 60 / 1000 | 0) + '小时前';
        } else {
            // 超过一天
            dateObj = new Date(time);
            if (isShowHMS) {
                fTime = U.completeZero(dateObj.getMonth() + 1) + '-' + U.completeZero(dateObj.getDate()) + ' ' + U.completeZero(dateObj.getHours()) + ':' + U.completeZero(dateObj.getMinutes());
            }
            else {
                fTime = U.completeZero(dateObj.getMonth() + 1) + '-' + U.completeZero(dateObj.getDate());
            }
        }
    }

    return fTime;
};

U.completeZero = function(number, count) {
    count = count || 2;
    number = number + '';
    var len = number.length;

    if (len < count) {
        number = (Math.pow(10, count - len) + '').substring(1) + number;
    }

    return number;
};

U.addUrlComponent = function(url, key, val) {
    var hashIndex = url.indexOf('#');
    var hash = '';

    if (hashIndex >= 0) {
        hash = url.substr(hashIndex);
        url = url.substr(0, hashIndex);
    }
    return url + (url.indexOf('?') < 0 ? '?' : '&') + key + '=' + val + hash;
};

U.throttle = function(method, context, timeout) {
    var args = Array.prototype.slice.call(arguments, 3);
    var tid;
    timeout = timeout !== undefined ? timeout : 20;
    return function() {
        context = context || this;
        clearTimeout(tid);
        tid = setTimeout(function() {
            clearTimeout(tid);
            method.apply(context, args);
        }, timeout);
    };
};

/**
 * 精确到小数第几位
 * @param num {Number|String} 数值
 * @param decimalPlaceCount {Number} 小数精确位
 * @returns {{str: String, num: Number}}
 */
U.correctNum = function(num, decimalPlaceCount) {
    var dpc = decimalPlaceCount;
    var absNum;
    var numPowDpc;
    var numPowDpcAddOne;
    var resNum;
    var resStr;
    var pointIndex;
    var zeroFilledCount;

    if (decimalPlaceCount === undefined) {
        return {
            num: num,
            str: num + ''
        }
    }

    absNum = Math.abs(+num);
    numPowDpc = absNum * Math.pow(10, dpc) | 0;
    numPowDpcAddOne = absNum * Math.pow(10, dpc + 1) | 0;

    if (numPowDpcAddOne - numPowDpc * 10 > 4) {
        resNum = (numPowDpc + 1) / Math.pow(10, dpc);
    } else {
        resNum = numPowDpc / Math.pow(10, dpc);
    }
    resNum = (num < 0 ? -1 : 1) * resNum;
    resStr = resNum + '';

    if (dpc > 0) {
        pointIndex = resStr.indexOf('.');
        if (pointIndex < 0) {
            resStr += '.';
            zeroFilledCount = dpc;
        } else {
            zeroFilledCount = dpc - resStr.substring(pointIndex + 1).length;
        }
        resStr += (Math.pow(10, zeroFilledCount) + '').substring(1);
    }

    return {
        num: resNum,
        str: resStr
    }
};

/**
 * 将主要危险字符转义为html实体
 * @param str {String} 字符串
 * @returns {String}
 */
U.encodeDangerousCharacterToHTMLEntity = function(str) {
    try {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/ /g, '&nbsp;')
            .replace(/'/g, '&apos;')
            .replace(/"/g, '&quot;');
    } catch (e) {
        throw new TypeError(str);
    }
};

U.removeProtocol = function(url) {
    if (!url) return url;
    try {
        return url.replace(/^http(|s):/, '');
    } catch (e) {
        return url;
    }
};

module.exports = U;
