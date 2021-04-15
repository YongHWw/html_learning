## 本地存储

本地存储分为cookie，以及新增的localStorage和sessionStorage

1、cookie 存储在本地，容量最大4k，在同源的http请求时携带传递，损耗带宽，可设置访问路径，只有此路径及此路径的子路径才能访问此cookie，在设置的过期时间之前有效。

```
jquery 设置cookie
$.cookie('mycookie','123',{expires:7,path:'/'});
jquery 获取cookie
$.cookie('mycookie');
```

**课堂实例**
只提示一次的弹框

2、localStorage 存储在本地，容量为5M或者更大，不会在请求时候携带传递，在所有同源窗口中共享，**数据一直有效，除非人为删除**，可作为长期数据。

```
//设置：
localStorage.setItem("dat", "456");
localStorage.dat = '456';

//获取：
localStorage.getItem("dat");
localStorage.dat

//删除
localStorage.removeItem("dat");
```

3、sessionStorage 存储在本地，容量为5M或者更大，不会在请求时候携带传递，**在同源的当前窗口关闭前有效**。

localStorage 和 sessionStorage 合称为Web Storage , Web Storage支持事件通知机制，可以将数据更新的通知监听者，Web Storage的api接口使用更方便。

iPhone的无痕浏览不支持Web Storage，只能用cookie。