$(function () {

    getTime();
    getWord();
    
    function getWord() {
        var location = getLocation();
        var href = location[0];
        var p = location[1];
        if (p === undefined) {
            p = "&value=1";
        }
        var max = 10;
        try {
            if (window.localStorage) {
                var local = window.localStorage;
                local.clear();
                put(local, data);
                var length = local.length;
                $("#count").text(length);
                var size = Math.ceil(length / 10);
                var pagination = "";
                var active = "";
                var page = parseInt(p.split("=")[1], 10);
                if (page > size || page < 1)
                    page = 1;
                for (var s = 0; s < size; s++) {
                    if ((s + 1) == page)
                        active = "active ";
                    else
                        active = "";
                    pagination +=
                        '<li class="' + active + 'page-item"><a class="page-link" href="' +
                        href + "&value=" + (s + 1) + '">' + (s + 1) +
                        ' <span class="sr-only">(current)</span></a></li>'
                }
                $(".pagination").append(pagination);
                var html = get(local, page);
                $('#accordion').append(html);
            } else {
                alert("no support localStorage!!!!")
            }
        } catch (e) {
            alert('出错了');
            throw new Error(10, e);
        }

    }
    function put(local, data) {
        var index = 1;
        for (var i in data) {
            local.setItem((index++).toString(), i + "##" + data[i]);
        }
    }
    function get(local, page) {
        var html = '';
        for (var j = (page - 1) * 10; j < page * 10; j++) {
            var index = parseInt(local.key(j, 10));
            if (index != undefined) {
                var item = local.getItem(index);
                var k = item.split("##")[0];
                var _k2 = k.substring(0, k.indexOf(" "));
                var _k_name = k.split(" ")[0];
                var _k_attr = k.split(" ")[1];
                var _k_name_style = "s" + _k_name.length;
                var _k = k.replace(" ", "-").replace(".", "");
                var v = item.split("##")[1];
                v = v.replace(_k2, "<span class=" + _k_name_style + ">" + _k2 + "</span>");
                html +=
                    '<div class="card">' +
                    '<div class="card-header">' +
                    '<h5 class="mb-0">' +
                    '<i>' + parseInt(j + 1, 10) + '. </i>' +
                    '<span style="display: inline-block;width: 80%;" role="button" data-toggle="collapse" data-parent="#accordion" href="#' + _k + '">' + "<span class = " + _k_name_style + ">" + _k_name + "</span>" + _k_attr +
                    '</span>' +
                    '</h5>' +
                    '</div>' +
                    '<div id=' + _k + ' class="collapse">' +
                    '<div class="card-block word-desc">' + v +
                    '</div>' +
                    '</div>' +
                    '</div>';
            }
        }
        return html;
    }
    function getLocation() {
        var url = document.location.href;
        if (url[url.lastIndexOf("/") + 1] != "?")
            url += "?";
        url = url.split("&");
        return url;
    }
    function getTime() {
        setInterval(function () {
            var now = new Date();
            var sprint = new Date(2018, 1, 15, 0, 0, 0);
            var holiday = new Date(2017, 0, 23, 0, 0, 0);
            $("#time").html(now);

            var t = sprint.getTime() - now.getTime();
            var d = 0;
            var h = 0;
            var m = 0;
            var s = 0;
            if (t >= 0) {
                d = Math.floor(t / 1000 / 60 / 60 / 24);
                h = Math.floor(t / 1000 / 60 / 60 % 24);
                m = Math.floor(t / 1000 / 60 % 60);
                s = Math.floor(t / 1000 % 60);
            }
            $(".s_d").html(d);
            $(".s_h").html(h);
            $(".s_m").html(m);
            $(".s_s").html(s);
            t = holiday.getTime() - now.getTime();
            if (t >= 0) {
                d = Math.floor(t / 1000 / 60 / 60 / 24);
                h = Math.floor(t / 1000 / 60 / 60 % 24);
                m = Math.floor(t / 1000 / 60 % 60);
                s = Math.floor(t / 1000 % 60);
            }
            $(".g_d").html(d);
            $(".g_h").html(h);
            $(".g_m").html(m);
            $(".g_s").html(s);

        }, 1000);
    }
});
