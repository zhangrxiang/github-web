require.config({
    paths: {
        baseUrl: '../lib/',
        jquery: 'bootstrap/js/jquery',
        'canvas-time': 'canvas-time'
    }
});
require(["jquery", "canvas-time"], function ($, _) {
    (function () {
        let html = "";
        let a = location.host;
        let postPath = "./lib/menu.json";
        $.get(postPath, {}, function (ret) {
            if (ret) {
                let menu = ret['menu'];
                for (let i in menu) {
                    // let url = location.protocol + "//" + location.host + "/web/" + menu[i].url;
                    let _url = menu[i].url;
                    let _title = menu[i].title;
                    let url = location.protocol + "//" + location;
                    if (url.indexOf("github") > 0) {
                        url = location.protocol + "//" + location.host + "/github-web/web/" + _url
                    } else {
                        url = location.protocol + "//" + location.host + "/web/" + _url;
                    }
                    if (url.indexOf("web/index.html") > 0) {
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
                let list = document.querySelector("ul");
                list.innerHTML = html;
            }
        });
        console.log(a)
        // for (let i in menu) {
        //     let url = location.protocol + "//" + location.host + "/web/" + menu[i].url;
        // let _url = menu[i].url;
        // let _title = menu[i].title;
        // let url = location.protocol + "//" + location;
        // if (url.indexOf("github") > 0) {
        //     url = location.protocol + "//" + location.host + "/github-web/web/" + _url
        // } else {
        //     url = location.protocol + "//" + location.host + "/web/" + _url;
        // }
        // if (url.indexOf("web/index.html") > 0) {
        //     url = location.protocol + "//" + location.host;
        // }
        // console.log(url);
        // if (window.location.href === url) {
        //     html += "<li class=\"list-group-item list-group-item-info\">";
        // } else {
        //     html += "<li class=\"list-group-item\">";
        // }
        // html += "<a class=\"center-block\" href=\"" + url + "\">" + _title + "</a></li>";
        // }
        let list = document.querySelector("ul");
        list.innerHTML = html;
    })();
});