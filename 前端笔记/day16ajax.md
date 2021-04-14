## ajax与jsonp

ajax技术的目的是让javascript发送http请求，与后台通信，获取数据和信息。ajax技术的原理是实例化xmlhttp对象，使用此对象与后台通信。ajax通信的过程不会影响后续javascript的执行，从而实现异步。

**同步和异步**
现实生活中，同步指的是同时做几件事情，异步指的是做完一件事后再做另外一件事，程序中的同步和异步是把现实生活中的概念对调，也就是程序中的异步指的是现实生活中的同步，程序中的同步指的是现实生活中的异步。

**局部刷新和无刷新**
ajax可以实现局部刷新，也叫做无刷新，无刷新指的是整个页面不刷新，只是局部刷新，ajax可以自己发送http请求，不用通过浏览器的地址栏，所以页面整体不会刷新，ajax获取到后台数据，更新页面显示数据的部分，就做到了页面局部刷新。

**同源策略**
ajax请求的页面或资源只能是同一个域下面的资源，不能是其他域的资源，这是在设计ajax时基于安全的考虑。特征报错提示：

```
XMLHttpRequest cannot load https://www.baidu.com/. No  
'Access-Control-Allow-Origin' header is present on the requested resource.  
Origin 'null' is therefore not allowed access.
```

**$.ajax使用方法**
常用参数：
1、url 请求地址
2、type 请求方式，默认是'GET'，常用的还有'POST'
3、dataType 设置返回的数据格式，常用的是'json'格式，也可以设置为'html'
4、data 设置发送给服务器的数据
5、success 设置请求成功后的回调函数
6、error 设置请求失败后的回调函数
7、async 设置是否异步，默认值是'true'，表示异步

以前的写法：

```
$.ajax({
    url: 'js/data.json',
    type: 'GET',
    dataType: 'json',
    data:{'aa':1}
    success:function(data){
        alert(data.name);
    },
    error:function(){
        alert('服务器超时，请重试！');
    }
});
```

新的写法(推荐)：

```
$.ajax({
    url: 'js/data.json',
    type: 'GET',
    dataType: 'json',
    data:{'aa':1}
})
.done(function(data) {
    alert(data.name);
})
.fail(function() {
    alert('服务器超时，请重试！');
});

// data.json里面的数据： {"name":"tom","age":18}
```

**课堂练习**
制作首页用户信息读取

**jsonp**
ajax只能请求同一个域下的数据或资源，有时候需要跨域请求数据，就需要用到jsonp技术，jsonp可以跨域请求数据，它的原理主要是利用了<script>标签可以跨域链接资源的特性。jsonp和ajax原理完全不一样，不过jquery将它们封装成同一个函数。

```
$.ajax({
    url:'js/data.js',
    type:'get',
    dataType:'jsonp',
    jsonpCallback:'fnBack'
})
.done(function(data){
    alert(data.name);
})
.fail(function() {
    alert('服务器超时，请重试！');
});

// data.js里面的数据： fnBack({"name":"tom","age":18});
```

**课堂实例**
获取360搜索关键词联想数据

```
$(function(){
    $('#txt01').keyup(function(){
        var sVal = $(this).val();
        $.ajax({
            url:'https://sug.so.360.cn/suggest?',
            type:'get',
            dataType:'jsonp',
            data: {word: sVal}
        })
        .done(function(data){
            var aData = data.s;
            $('.list').empty();
            for(var i=0;i<aData.length;i++)
            {
                var $li = $('<li>'+ aData[i] +'</li>');
                $li.appendTo($('.list'));
            }
        })        
    })
})

//......

<input type="text" name="" id="txt01">
<ul class="list"></ul>
```