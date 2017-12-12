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
            var url = menu[i].url;
            var title = menu[i].title;
            if(url == 'index.html'){
                url = location.protocol + "//" + location.host
                console.log("aaa");
            }else {
                console.log("bbb");
                url = "/web/" + url;
            }
            if(url.indexOf("github")){
                url = "github-web/web/" + url;
            }
            if (window.location.href.includes(url)) {
                html += "<li class=\"list-group-item list-group-item-info\">";
            } else {
                html += "<li class=\"list-group-item\">";
            }
            html += "<a class=\"center-block\" href=\"" + url + "\">" + title + "</a></li>";

        }
        var list = document.querySelector("ul");
        list.innerHTML = html;
    })();
};