# js


## 事件
### 绑定事件
>`addEventListener()`
```js
btn.addEventListener('click', function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
});
```
### 移除事件
>`removeEventListener()`
```js
btn.removeEventListener('click', bgChange);
```
### 禁止默认行为
> 在事件对象上调用`preventDefault()`函数

### 事件捕获
> 浏览器检查元素的最外层祖先（`<html>`）是否在捕获阶段中注册了一个事件处理程序，如果是，则运行它。然后，它移动到`<html>`中的下一个元素，并执行相同的操作，然后是下一个元素，依此类推，直到到达实际点击的元素。
```js
document.getElementById("parent").addEventListener("click",function(e){
    alert("parent事件被触发，"+this.id);
},true);
document.getElementById("child").addEventListener("click",function(e){
    alert("child事件被触发，"+this.id)
},true);
//结论：先parent,然后child。事件触发顺序变更为自外向内，这就是事件捕获。

```

### 事件冒泡
> 浏览器检查实际点击的元素是否在冒泡阶段中注册了一个事件处理程序，如果是，则运行它，然后它移动到下一个直接的祖先元素，并做同样的事情，然后是下一个，直到到达`<html>`元素。

```js
document.getElementById("parent").addEventListener("click",function(e){
    alert("parent事件被触发，"+this.id);
});
document.getElementById("child").addEventListener("click",function(e){
    alert("child事件被触发，"+this.id)
});

//结论：先child，然后parent。事件的触发顺序自内向外，这就是事件冒泡。

video.onclick = function(e) {
  e.stopPropagation();
  video.play();
};
//用stopPropagation()阻止事件冒泡
```

### 事件委托（事件代理）
> 事件委托就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。

```js
window.onload = function(){
　　var oUl = document.getElementById("ul1");
　　oUl.onclick = function(ev){
　　　　var ev = ev || window.event;
　　　　var target = ev.target || ev.srcElement;
　　　　if(target.nodeName.toLowerCase() == 'li'){
            alert(123);
            alert(target.innerHTML);
        }
　　}
}
```


## 原型


### `prototype`属性
> 继承成员被定义的地方
- 继承的属性和方法是定义在 `prototype` 属性之上的（称之为子命名空间 `(sub namespace)` ）——那些以 `Object.prototype`. 开头的属性，而非仅仅以 `Object`. 开头的属性。`prototype` 属性的值是一个对象，我们希望被原型链下游的对象继承的属性和方法，都被储存在其中。
- `prototype` 属性指向当前对象的原型对象？其实不是（还记得么？原型对象是一个内部对象，应当使用 `__proto__` 访问）。`prototype` 属性包含（指向）一个对象，你在这个对象中定义需要被继承的成员。

### `create()`
>  `Object.create()` 方法创建新的对象实例。
```js
var person2 = Object.create(person1);
//create() 实际做的是从指定原型对象创建一个新的对象。这里以 person1 为原型对象创建了 person2 对象。

person2.__proto__
//返回 person1 对象。

```

### `constructor` 属性
> 每个对象实例都具有 `constructor` 属性，指向创建该实例的构造器函数。
```js
person1.constructor
person2.constructor
var person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);
person3.name.first
person3.age
person3.bio()

person1.constructor.name

```
