/**
 * Created by zhangrongxiang on 2017/12/31.
 */
requirejs(["vue/vue"], function (Vue) {
    new Vue({
        el: ".content",
        data: {
            hello: "孙靖远",
            show: true
        }
    });
    new Vue({
        el: '#example-1',
        data: {
            hello: "孙靖远",
            show: true
        }
    });
    new Vue({
        el: '#demo',
        data: {
            hello: "孙靖远",
            show: true
        }
    })



});
