require.config({
    paths: {
        baseUrl: '../lib/',
        jquery: 'bootstrap/js/jquery',
        // bootstrap: 'bootstrap/js/bootstrap',
        // tether:"https://cdn.bootcss.com/tether/1.4.3/js/tether",
        Vue: 'vue/vue',
        'canvas-time': 'canvas-time'
    },
    shim: {
        // "tether":{
        //     deps: ["jquery"],
        //     exports: "tether"
        // },
        // "bootstrap": {
        //     deps: ["jquery",'tether'],
        //     exports: "bootstrap"
        // }
    }
});
require(["jquery", "canvas-time", "Vue"], function ($, _, Vue) {
    (function () {
        // Vue.component('canvastime', {
        //     template: '<canvas id="canvas" style="width:80%;margin-top: 20px; margin-bottom: 10px;" height="100" width="700">当前浏览器不支持Canvas，请更换浏览器后再试</canvas>'
        // });
        // let canvas_time = {
        //     template: '<canvas id="canvas" style="width:80%;margin-top: 20px; margin-bottom: 10px;" height="100" width="700">当前浏览器不支持Canvas，请更换浏览器后再试</canvas>'
        // };
        let app = new Vue({
            el: ".container",
            components: {
                // <my-component> 将只在父组件模板中可用
                // 'canvas-time': canvas_time
            },
            data: {
                menu: "MENU",
                all: [],
                allCache: []
            },
            methods: {
                deleteCache: function () {
                    window.localStorage.removeItem("menu")
                    alert("delete success...")
                },
                getAll: function () {
                    app.all = JSON.parse(localStorage.getItem("menu"));
                    if (!app.all) {
                        let postPath = "./lib/menu.json";
                        $.get(postPath, function (ret) {
                            if (ret) {
                                app.all = ret['menu'];
                                localStorage.setItem("menu", JSON.stringify(app.all))
                            }
                        })
                    }
                },
                getAll2: function () {
                    let html = "";
                    let postPath = "./lib/menu.json";
                    $.get(postPath, function (ret) {
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
                }
            }
        });
        app.getAll();
    })();
});