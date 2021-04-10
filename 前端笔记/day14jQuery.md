## 尺寸相关、滚动事件

### 1、获取和设置元素的尺寸

```
width()、height()    获取元素width和height  
innerWidth()、innerHeight()  包括padding的width和height  
outerWidth()、outerHeight()  包括padding和border的width和height  
outerWidth(true)、outerHeight(true)   包括padding和border以及margin的width和height
```

### 2、获取元素相对页面的绝对位置

```
offset()
```

**课堂练习**

加入购物车动画

### 3、获取浏览器可视区宽度高度

```
$(window).width();
$(window).height();
```

### 4、获取页面文档的宽度高度

```
$(document).width();
$(document).height();
```

### 5、获取页面滚动距离

```
$(document).scrollTop();  
$(document).scrollLeft();
```

### 6、页面滚动事件

```
$(window).scroll(function(){  
    ......  
})
```

## jquery属性操作

### 1、html() 取出或设置html内容

```
// 取出html内容

var $htm = $('#div1').html();

// 设置html内容

$('#div1').html('<span>添加文字</span>');
```

### 2、prop() 取出或设置某个属性的值

```
// 取出图片的地址

var $src = $('#img1').prop('src');

// 设置图片的地址和alt属性

$('#img1').prop({src: "test.jpg", alt: "Test Image" });
```





## jquery循环

对jquery选择的对象集合分别进行操作，需要用到jquery循环操作，此时可以用对象上的each方法：

```
$(function(){
    $('.list li').each(function(i){
        $(this).html(i);
    })
})
......
<ul class="list">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```