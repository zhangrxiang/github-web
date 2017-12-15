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