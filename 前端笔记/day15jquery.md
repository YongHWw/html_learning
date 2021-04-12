## jquery事件

**事件函数列表：**

```
blur() 元素失去焦点
focus() 元素获得焦点
click() 鼠标单击
mouseover() 鼠标进入（进入子元素也触发）
mouseout() 鼠标离开（离开子元素也触发）
mouseenter() 鼠标进入（进入子元素不触发）
mouseleave() 鼠标离开（离开子元素不触发）
hover() 同时为mouseenter和mouseleave事件指定处理函数
ready() DOM加载完成
resize() 浏览器窗口的大小发生改变
scroll() 滚动条的位置发生变化
submit() 用户递交表单
```

**绑定事件的其他方式**

```
$(function(){
    $('#div1').bind('mouseover click', function(event) {
        alert($(this).html());
    });
});
```

**取消绑定事件**

```
$(function(){
    $('#div1').bind('mouseover click', function(event) {
        alert($(this).html());

        // $(this).unbind();
        $(this).unbind('mouseover');

    });
});
```





## 事件冒泡

**什么是事件冒泡**
在一个对象上触发某类事件（比如单击onclick事件），如果此对象定义了此事件的处理程序，那么此事件就会调用这个处理程序，如果没有定义此事件处理程序或者事件返回true，那么这个事件会向这个对象的父级对象传播，从里到外，直至它被处理（父级对象所有同类事件都将被激活），或者它到达了对象层次的最顶层，即document对象（有些浏览器是window）。

**事件冒泡的作用**
事件冒泡允许多个操作被集中处理（把事件处理器添加到一个父级元素上，避免把事件处理器添加到多个子级元素上），它还可以让你在对象层的不同级别捕获事件。

**阻止事件冒泡**
事件冒泡机制有时候是不需要的，需要阻止掉，通过 event.stopPropagation() 来阻止

```
$(function(){
    var $box1 = $('.father');
    var $box2 = $('.son');
    var $box3 = $('.grandson');
    $box1.click(function() {
        alert('father');
    });
    $box2.click(function() {
        alert('son');
    });
    $box3.click(function(event) {
        alert('grandson');
        event.stopPropagation();

    });
    $(document).click(function(event) {
        alert('grandfather');
    });
})

......

<div class="father">
    <div class="son">
        <div class="grandson"></div>
    </div>
</div>
```

**阻止默认行为**
阻止表单提交

```
$('#form1').submit(function(event){
    event.preventDefault();
})
```

**合并阻止操作**
实际开发中，一般把阻止冒泡和阻止默认行为合并起来写，合并写法可以用

```
// event.stopPropagation();
// event.preventDefault();

// 合并写法：
return false;
```

**课堂练习**
页面弹框（点击弹框外弹框关闭）;



## 事件委托

事件委托就是利用冒泡的原理，把事件加到父级上，通过判断事件来源的子集，执行相应的操作，事件委托首先可以极大减少事件绑定次数，提高性能；其次可以让新加入的子元素也可以拥有相同的操作。

**一般绑定事件的写法**

```
$(function(){
    $ali = $('#list li');
    $ali.click(function() {
        $(this).css({background:'red'});
    });
})
...
<ul id="list">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
```

**事件委托的写法**

```
$(function(){
    $list = $('#list');
    $list.delegate('li', 'click', function() {
        $(this).css({background:'red'});
    });
})
...
<ul id="list">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
```



## jquery元素节点操作

**创建节点**

```
var $div = $('<div>');
var $div2 = $('<div>这是一个div元素</div>');
```

**插入节点**
1、append()和appendTo()：在现存元素的内部，从后面插入元素

```
var $span = $('<span>这是一个span元素</span>');
$('#div1').append($span);
......
<div id="div1"></div>
```

2、prepend()和prependTo()：在现存元素的内部，从前面插入元素

3、after()和insertAfter()：在现存元素的外部，从后面插入元素

4、before()和insertBefore()：在现存元素的外部，从前面插入元素

**删除节点**

```
$('#div1').remove();
```



## 滚轮事件与函数节流

**jquery.mousewheel插件使用**
jquery中没有鼠标滚轮事件，原生js中的鼠标滚轮事件不兼容，可以使用jquery的滚轮事件插件jquery.mousewheel.js。

```html	
 var i = 0;
        $(window).mousewheel(function(event,dat){
            i++
            alert(i)
        })
```



**函数节流**
javascript中有些事件的触发频率非常高，比如onresize事件(jq中是resize)，onmousemove事件(jq中是mousemove)以及上面说的鼠标滚轮事件，在短事件内多处触发执行绑定的函数，可以巧妙地使用定时器来减少触发的次数，实现函数节流。