/**
 * Created by zhangrongxiang on 2018/1/2.
 */


requirejs(["../../lib/vue/vue"], function (Vue) {
    // 注册
    Vue.component('my-component', {
        template: '<h3>A custom component! -- 全局注册</h3>'
    });
    var Child = {
        template: '<h4>A custom component! -- 局部注册</h4>'
    };
// 创建根实例
    new Vue({
        el: '#example',
        components: {
            // <my-component> 将只在父组件模板中可用
            'my-component2': Child
        }
    });

///////////////////////////////////////////////////////////////////

    var data = {counter: 0};
    Vue.component('simple-counter', {
        template: '<button v-on:click="counter += 1">{{ counter }}</button>',
        // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
        // 但是我们却给每个组件实例返回了同一个对象的引用
        data: function () {
            // return data
            return {
                counter: 0
            }
        }
    });

    new Vue({
        el: '#example-2'
    });

    ////////////////////////////////////////////////////////////////////////
    Vue.component('child', {
        // 声明 props
        props: ['message'],
        // 就像 data 一样，prop 也可以在模板中使用
        // 同样也可以在 vm 实例中通过 this.message 来使用
        template: '<span>{{ message }}</span>'
    });
    new Vue({
        el: '#example-3',
        data: {
            parentMsg: 'Message from parent'
        }
    });
    Vue.component('todo-item', {
        // todo-item 组件现在接受一个
        // "prop"，类似于一个自定义特性。
        // 这个 prop 名为 todo。
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
    });

    new Vue({
        el: '#example-4',
        data: {
            groceryList: [
                {id: 0, text: '蔬菜'},
                {id: 1, text: '奶酪'},
                {id: 2, text: '随便其它什么人吃的东西'}
            ]
        }
    });
    ////////////////////////////////////////////////////////////////////////////
    Vue.component('button-counter', {
        template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
        data: function () {
            return {
                counter: 0
            }
        },
        methods: {
            incrementCounter: function () {
                this.counter += 1;
                this.$emit('increment')
            }
        }
    });
    new Vue({
        el: '#example-5',
        data: {
            total: 0
        },
        methods: {
            incrementTotal: function () {
                this.total += 1
            }
        }
    })
});
