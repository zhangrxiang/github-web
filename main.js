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
                url: "url-XXcode.html.html"
            },
            {
                title: "unicode",
                url: "unicode.html"
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
        for (var i in menu) {
            console.log(menu[i]);
            html += "<li class=\"list-group-item\">" +
                "<a class=\"center-block\" href=\"" + menu[i].url + "\">" + menu[i].title + "</a>" +
                "</li>";
        }
        console.log(document.querySelector("ul"));
        console.log(document.getElementsByClassName("list-group").item(0));
        var list = document.querySelector("ul");
        list.innerHTML = html;
    })();
};