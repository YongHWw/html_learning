## jquery加载

将获取元素的语句写到页面头部，会因为元素还没有加载而出错，jquery提供了ready方法解决这个问题，它的速度比原生的 window.onload 更快。

```
<script type="text/javascript">

$(document).ready(function(){

     ......

});

</script>
```

可以简写为：

```
<script type="text/javascript">

$(function(){

     ......

});

</script>
```

## jquery选择器

**jquery用法思想一**
选择某个网页元素，然后对它进行某种操作

### **jquery选择器**

jquery选择器可以快速地选择元素，选择规则和css样式相同，使用length属性判断是否选择成功。

```
$('#myId') //选择id为myId的网页元素
$('.myClass') // 选择class为myClass的元素
$('li') //选择所有的li元素
$('#ul1 li span') //选择id为为ul1元素下的所有li下的span元素
$('input[name=first]') // 选择name属性等于first的input元素
```

### **对选择集进行过滤**

```
$('div').has('p'); // 选择包含p元素的div元素
$('div').not('.myClass'); //选择class不等于myClass的div元素
$('div').filter('.myClass'); //选择class等于myClass的div元素
$('div').eq(5); //选择第6个div元素
```

### **选择集转移**

```
$('div').prev(); //选择div元素前面紧挨的同辈元素
$('div').prevAll(); //选择div元素之前所有的同辈元素
$('div').next(); //选择div元素后面紧挨的同辈元素
$('div').nextAll(); //选择div元素后面所有的同辈元素
$('div').parent(); //选择div的父元素
$('div').children(); //选择div的所有子元素
$('div').siblings(); //选择div的同级元素
$('div').find('.myClass'); //选择div内的class等于myClass的元素
```

**判断是否选择到了元素**
jquery有容错机制，即使没有找到元素，也不会出错，可以用length属性来判断是否找到了元素,length等于0，就是没选择到元素，length大于0，就是选择到了元素。

```
var $div1 = $('#div1');
var $div2 = $('#div2');
alert($div1.length); // 弹出1
alert($div2.length); // 弹出0
......
<div id="div1">这是一个div</div>
```

## jquery样式操作

**jquery用法思想二**
同一个函数完成取值和赋值

### **操作行间样式**

```
// 获取div的样式
$("div").css("width");
$("div").css("color");

//设置div的样式
$("div").css("width","30px");
$("div").css("height","30px");
$("div").css({fontSize:"30px",color:"red"});
```

**特别注意**
选择器获取的多个元素，获取信息获取的是第一个，比如：$("div").css("width")，获取的是第一个div的width。

### **操作样式类名**

```
$("#div1").addClass("divClass2") //为id为div1的对象追加样式divClass2
$("#div1").removeClass("divClass")  //移除id为div1的对象的class名为divClass的样式
$("#div1").removeClass("divClass divClass2") //移除多个样式
$("#div1").toggleClass("anotherClass") //重复切换anotherClass样式
```

## 绑定click事件

给元素绑定click事件，可以用如下方法：

```
$('#btn1').click(function(){

    // 内部的this指的是原生对象

    // 使用jquery对象用 $(this)

})
```

### **获取元素的索引值**

有时候需要获得匹配元素相对于其同胞元素的索引位置，此时可以用index()方法获取

```
var $li = $('.list li').eq(1);
alert($li.index()); // 弹出1
......
<ul class="list">
    <li>1</li>
    <li>2</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
</ul>
```



## jquery特殊效果

fadeOut() 淡出
fadeToggle() 切换淡入淡出
hide() 隐藏元素
show() 显示元素
toggle() 切换元素的可见状态
slideDown() 向下展开
slideUp() 向上卷起
slideToggle() 依次展开或卷起某个元素

```
fadeIn() 淡入

    $btn.click(function(){

        $('#div1').fadeIn(1000,'swing',function(){
            alert('done!');
        });

    });

fadeOut() 淡出
fadeToggle() 切换淡入淡出
hide() 隐藏元素
show() 显示元素
toggle() 切换元素的可见状态
slideDown() 向下展开
slideUp() 向上卷起
slideToggle() 依次展开或卷起某个元素
```

## jquery链式调用

jquery对象的方法会在执行完后返回这个jquery对象，所有jquery对象的方法可以连起来写：

```
$('#div1') // id为div1的元素
.children('ul') //该元素下面的ul子元素
.slideDown('fast') //高度从零变到实际高度来显示ul元素
.parent()  //跳到ul的父元素，也就是id为div1的元素
.siblings()  //跳到div1元素平级的所有兄弟元素
.children('ul') //这些兄弟元素中的ul子元素
.slideUp('fast');  //高度实际高度变换到零来隐藏ul元素
```





## jquery动画

通过animate方法可以设置元素某属性值上的动画，可以设置一个或多个属性值，动画执行完成后会执行一个函数。

```
$('#div1').animate({
    width:300,
    height:300
},1000,'swing',function(){
    alert('done!');
});
```

参数可以写成数字表达式：

```
$('#div1').animate({
    width:'+=100',
    height:300
},1000,'swing',function(){
    alert('done!');
});
```

