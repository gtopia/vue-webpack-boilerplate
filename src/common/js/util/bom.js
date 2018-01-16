  var U = {
    name: 'Bom',
    version: 1.0
  };

  U.getClientInfo = (function () {
    var clientInfo;

    function getOs() {
      var ua = navigator.userAgent.toLowerCase();
      var mobileReg = /android|iphone|ipad|ipod|windows phone|symbianos|nokia|bb/;
      var pcReg = /linux|windows|mac|sunos|solaris/;
      var os = mobileReg.exec(ua) || pcReg.exec(ua);

      return {
        isMobile: mobileReg.test(ua),
        os: null === os ? "other" : os[0]
      };
    }

    function getBrowserInfo() {
      var ua = navigator.userAgent.toLowerCase();
      // 分级判断以防止某些浏览器ua中含有其他浏览器的标示
      // 一级:uc, 搜狗, 微信, 百度
      var browserReg1 = /(UCBrowser|SogouMobileBrowser|MicroMessenger|baidubrowser)\/(.*?)(?:\s{1}|$)/i;
      // 二级:qq(qq浏览器中含有微信浏览器标识)
      var browserReg2 = /(MQQBrowser|QQ)\/(.*?)(?:\s{1}|$)/i;
      // 三级:android原生或chrome(android浏览器一般含有chrome标识)
      var browserReg3 = /(Chrome)\/(.*?)(?:\s{1}|$)/i;
      // 四级:safari(webkit内核浏览器一般含有safari标识,所以置于最后)
      var browserReg4 = /(Safari)\/(.*?)(?:\s{1}|$)/i;

      return browserReg1.exec(ua) || browserReg2.exec(ua) || browserReg3.exec(ua) || browserReg4.exec(ua);
    }

    return function () {
      if (!clientInfo) {
        var osInfo = getOs();
        var browserInfo = getBrowserInfo();
        clientInfo = {
          isMobile: osInfo.isMobile,
          os: osInfo.os,
          browser: browserInfo && browserInfo[1],
          version: browserInfo && browserInfo[2]
        }
      }
      return clientInfo;
    }
  })();

module.exports = U;
