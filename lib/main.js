/**
 * Created by zhangrongxiang on 2017/7/2.
 */
window.onload = function () {
    (function () {
        var html = "";
        var a = location.host;
        for (var i in menu) {
            // var url = location.protocol + "//" + location.host + "/web/" + menu[i].url;
            var _url = menu[i].url;
            var _title = menu[i].title;
            var url = location.protocol + "//" + location;
            if (url.indexOf("github") > 0) {
                url = location.protocol + "//" + location.host + "/github-web/web/" + _url
            } else {
                url = location.protocol + "//" + location.host + "/web/" + _url;
            }
            if(url.indexOf("web/index.html") > 0){
               url = location.protocol + "//" + location.host;
            }
            console.log(url);
            if (window.location.href === url) {
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