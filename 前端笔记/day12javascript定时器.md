## 定时器

**定时器在javascript中的作用**
1、制作动画
2、异步操作
3、函数缓冲与节流

定时器类型及语法

定时器：
    setTimeout  只执行一次的定时器 
    clearTimeout 关闭只执行一次的定时器
    setInterval  反复执行的定时器
    clearInterval 关闭反复执行的定时器

```
/*
    定时器：
    setTimeout  只执行一次的定时器 
    clearTimeout 关闭只执行一次的定时器
    setInterval  反复执行的定时器
    clearInterval 关闭反复执行的定时器

*/

var time1 = setTimeout(myalert,2000);
var time2 = setInterval(myalert,2000);
/*
clearTimeout(time1);
clearInterval(time2);
*/
function myalert(){
    alert('ok!');
}
```

**课堂练习**
1、定时器制作移动动画
2、定时器制作无缝滚动
3、定时器制作时钟

```
<script type="text/javascript">
    window.onload = function(){    
        var oDiv = document.getElementById('div1');
        function timego(){
            var now = new Date();
            var year = now.getFullYear();
            var month = now.getMonth()+1;
            var date = now.getDate();
            var week = now.getDay();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds();
            var str = '当前时间是：'+ year + '年'+month+'月'+date+'日 '+toweek(week)+' '+todou(hour)+':'+todou(minute)+':'+todou(second);
            oDiv.innerHTML = str;
        }
        timego();
        setInterval(timego,1000);
    }

    function toweek(n){
        if(n==0)
        {
            return '星期日';
        }
        else if(n==1)
        {
            return '星期一';
        }
        else if(n==2)
        {
            return '星期二';
        }
        else if(n==3)
        {
            return '星期三';
        }
        else if(n==4)
        {
            return '星期四';
        }
        else if(n==5)
        {
            return '星期五';
        }
        else
        {
            return '星期六';
        }
    }


    function todou(n){
        if(n<10)
        {
            return '0'+n;
        }
        else
        {
            return n;
        }
    }
</script>
......
<div id="div1"></div>
```

4、定时器制作倒计时

```
<script type="text/javascript">
    window.onload = function(){
        var oDiv = document.getElementById('div1');
        function timeleft(){
            var now = new Date();
            var future = new Date(2016,8,12,24,0,0);
            var lefts = parseInt((future-now)/1000);
            var day = parseInt(lefts/86400);
            var hour = parseInt(lefts%86400/3600);
            var min = parseInt(lefts%86400%3600/60);
            var sec = lefts%60;
            str = '距离2016年9月12日晚24点还剩下'+day+'天'+hour+'时'+min+'分'+sec+'秒';
            oDiv.innerHTML = str; 
        }
        timeleft();
        setInterval(timeleft,1000);        
    }

</script>
......
<div id="div1"></div>
```

## 变量作用域

变量作用域指的是变量的作用范围，javascript中的变量分为全局变量和局部变量。

1、全局变量：在函数之外定义的变量，为整个页面公用，函数内部外部都可以访问。
2、局部变量：在函数内部定义的变量，只能在定义该变量的函数内部访问，外部无法访问。

```
<script type="text/javascript">
    //全局变量
    var a = 12;
    function myalert()
    {
        //局部变量
        var b = 23;
        alert(a);
        alert(b);
    }
    myalert(); //弹出12和23
    alert(a);  //弹出12    
    alert(b);  //出错
</script>
```

## 封闭函数

封闭函数是javascript中匿名函数的另外一种写法，创建一个一开始就执行而不用命名的函数。

一般定义的函数和执行函数：

```
function myalert(){
    alert('hello!');
};

myalert();
```

封闭函数：

```
(function(){
    alert('hello!');
})();
```

还可以在函数定义前加上“~”和“!”等符号来定义封闭函数

```
!function myalert(){
    alert('hello!');
}()
```

### **封闭函数的好处**

封闭函数可以**创造一个独立的空间**，在封闭函数内定义的变量和函数不会影响外部同名的函数和变量，可以避免命名冲突，在页面上引入多个js文件时，用这种方式添加js文件比较安全，比如：

```
var iNum01 = 12;
function myalert(){
    alert('hello!');
}
(function(){
    var iNum01 = 24;
    function myalert(){
        alert('hello!world');
    }
    alert(iNum01);
    myalert()
})()
alert(iNum01);
myalert();
```

## 常用内置对象

### 1、document

```
document.getElementById //通过id获取元素
document.getElementsByTagName //通过标签名获取元素
document.referrer  //获取上一个跳转页面的地址(需要服务器环境)
```

### 2、location

```
window.location.href  //获取或者重定url地址
window.location.search //获取地址参数部分
window.location.hash //获取页面锚点或者叫哈希值
```

**课堂练习**
通过地址栏的参数改变页面状态

### 3、Math

```
Math.random 获取0-1的随机数
Math.floor 向下取整
Math.ceil 向上取整
```

**课堂练习**
制作一定范围内的随机整数