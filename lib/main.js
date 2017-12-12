/**
 * Created by zhangrongxiang on 2017/7/2.
 */
window.onload = function () {
    (function () {
        var menu = [
            {
                title: "二维码(vue)",
                url: "qr-vue.html"
            },
            {
                title: "二维码(js)",
                url: "qr-js.html"
            },
            {
                title: "二维码(jquery)",
                url: "qr-jq.html"
            },
            {
                title: "encodeURI and decodeURI",
                url: "url-XXcode.html"
            },
            {
                title: "unicode",
                url: "unicode.html"
            },
            {
                title: "算法",
                url: "JavascriptVisual/Algorithms.html"
            },
            {
                title: "酷炫",
                url: "1.html"
            },
            {
                title: "返回",
                url: "index.html"
            }
        ];
        var html = "";
        var a = location.host;
        for (var i in menu) {
            // var url = location.protocol + "//" + location.host + "/web/" + menu[i].url;
            var _url = menu[i].url;
            var _title = menu[i].title;
            var url = location.protocol + "//" + location.host
            if (url.indexOf("github") > 0) {
                url = location.protocol + "//" + location.host + "/github-web/web/" + _url
            } else {
                url = location.protocol + "//" + location.host + "/web/" + _url;
            }
            if(url.indexOf("index.html") > 0){
                url = location.protocol + "//" + location.host;
            }
            console.log(url);
            if (window.location.href == url) {
                html += "<li class=\"list-group-item list-group-item-info\">";
            } else {
                html += "<li class=\"list-group-item\">";
            }
            html += "<a class=\"center-block\" href=\"" + url + "\">" + _title + "</a></li>";
        }
        var list = document.querySelector("ul");
        list.innerHTML = html;
    })();
};