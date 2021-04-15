## bootstrap

简单、直观、强悍的前端开发框架，让web开发更迅速、简单。 来自Twitter，是目前很受欢迎的前端框架之一。 Bootrstrap是基于HTML、CSS、JavaScript的，让书写代码更容易。 移动优先，响应式布局开发。

bootstrap中文网址：http://www.bootcss.com/

#### bootstrap 容器

- container-fluid 流体
- container
  - 1170
  - 970
  - 750
  - 100%

```
<div class="container-fluid">流体容器</div>
<div class="container">响应式固定容器</div>
```

#### bootstrap响应式查询区间：

1、大于等于768
2、大于等于992
3、大于等于1200

#### bootstrap 栅格系统

bootstrap将页面横向分为12等分，按照12等分定义了适应不同宽度等分的样式类，这些样式类组成了一套响应式、移动设备优先的流式栅格系统：

1、col-lg- *大于1200排成一行，小于1200分别占一行
2、col-md-* 大于992排成一行，小于992分别占一行
3、col-sm- *大于768排成一行，小于768分别占一行
4、col-xs-* 始终排列成一行

```
<style type="text/css">
    div[class*='col-']{

        background-color:cyan;
        border:1px solid #ddd;
        height:50px;
    }
</style>

......

<div class="container">
    <div class="row">
        <div class="col-lg-3">col-lg-3</div>
        <div class="col-lg-3">col-lg-3</div>
        <div class="col-lg-5">col-lg-5</div>
        <div class="col-lg-1">col-lg-1</div>
    </div>
    <br>
    <br>
    <div class="row">
        <div class="col-md-3">col-md-3</div>
        <div class="col-md-3">col-md-3</div>
        <div class="col-md-3">col-md-3</div>
        <div class="col-md-3">col-md-3</div>
    </div>
    <br>
    <br>
    <div class="row">
        <div class="col-sm-3">col-sm-3</div>
        <div class="col-sm-3">col-sm-3</div>
        <div class="col-sm-3">col-sm-3</div>
        <div class="col-sm-3">col-sm-3</div>
    </div>
    <br>
    <br>
    <div class="row">
        <div class="col-xs-3">col-xs-3</div>
        <div class="col-xs-3">col-xs-3</div>
        <div class="col-xs-3">col-xs-3</div>
        <div class="col-xs-3">col-xs-3</div>
    </div>
</div>
```

#### 列偏移

1、col-lg-offset-*
2、col-md-offset-*
3、col-sm-offset-*
4、col-xs-offset-*

#### bootstrap 隐藏类

1、hidden-xs
2、hidden-sm
3、hidden-md
4、hidden-lg

#### bootstrap 按钮

1、btn 声明按钮
2、btn-default 默认按钮样式
3、btn-primay
4、btn-success
5、btn-info
6、btn-warning
7、btn-danger
8、btn-link
9、btn-lg
10、btn-md
11、btn-xs
12、btn-block 宽度是父级宽100%的按钮
13、active
14、disabled
15、btn-group 定义按钮组

```
<!-- 一般按钮组 -->
<div class="btn-group">
    <input type="button" name="" value="按钮一" class="btn btn-primary">
    <input type="button" name="" value="按钮二" class="btn btn-warning">
    <input type="button" name="" value="按钮三" class="btn btn-danger">
</div>

<!-- 通栏按钮组 
     如果用input标签做按钮，需要将它用 btn-group的容器包起来
-->
<div class="btn-group btn-group-justified">
    <div class="btn-group">
        <input type="button" name="" value="按钮一" class="btn btn-primary">
    </div>
    <div class="btn-group">
        <input type="button" name="" value="按钮二" class="btn btn-warning">
    </div>
    <div class="btn-group">
        <input type="button" name="" value="按钮三" class="btn btn-danger">
    </div>
</div>

<!-- 通栏按钮组，如果用a标签做按钮，就不用上面的结构，直接写
-->
<div class="btn-group btn-group-justified">
    <a href="#" class="btn btn-primary">按钮一</a>
    <a href="#" class="btn btn-default">按钮二</a>
    <a href="#" class="btn btn-default">按钮三</a>
</div>
```

#### bootstrap 表单

1、form 声明一个表单域
2、form-inline 内联表单域
3、form-horizontal 水平排列表单域
4、form-group 表单组、包括表单文字和表单控件
5、form-control 文本输入框、下拉列表控件样式
6、checkbox checkbox-inline 多选框样式
7、radio radio-inline 单选框样式
8、input-group 表单控件组
9、input-group-addon 表单控件组物件样式(提示)
10、input-group-btn 表单控件组物件为按钮的样式
11、form-group-lg 大尺寸表单
12、form-group-sm 小尺寸表单

```
<div class="container">
        <div class="row">
            <form>
                <div class="form-group">
                    <label for="input01">用户名：</label>
                    <!-- form-control 固定写法 -->
                    <input type="text" class="form-control" placeholder="用户名" id="input01">
                </div>

                <div class="form-group">
                    <label>密码：</label>
                    <!-- form-control 固定写法 -->
                    <input type="password" class="form-control" placeholder="密码">
                </div>
            </form>

            <br>
            <br>
            <br>

            <!-- 内联表单 -->
            <form class="form-inline">
                <div class="form-group">
                    <label for="input02">用户名：</label>
                    <!-- form-control 固定写法 -->
                    <input type="text" class="form-control" placeholder="用户名" id="input02">
                </div>

                <div class="form-group">
                    <label>密码：</label>
                    <!-- form-control 固定写法 -->
                    <input type="password" class="form-control" placeholder="密码">
                </div>
            </form>

            <br>
            <br>
            <br>

            <!-- 水平排列表单 需要加入栅格，输入框要用div包起来 -->
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="input03" class="col-xs-2">用户名：</label>
                    <div class="col-xs-10">
                        <!-- form-control 固定写法 -->
                        <input type="text" class="form-control" placeholder="用户名" id="input03">
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-xs-2">密码：</label>
                    <div class="col-xs-10">
                        <!-- form-control 固定写法 -->
                        <input type="password" class="form-control" placeholder="密码">
                    </div>
                </div>
            </form>
        </div>
    </div>
```

#### bootstrap 图片

img-responsive 声明响应式图片

#### bootstrap 字体图标

通过字体代替图标，font文件夹需要和css文件夹在同一目录

#### bootstrap 导航条

1、navbar 声明导航条
2、navbar-default 声明默认的导航条样式
3、navbar-inverse 声明反白的导航条样式
4、navbar-static-top 去掉导航条的圆角
5、navbar-fixed-top 固定到顶部的导航条
6、navbar-fixed-bottom 固定到底部的导航条
7、navbar-header 申明logo的容器
8、navbar-brand 针对logo等固定内容的样式
11、nav navbar-nav 定义导航条中的菜单
12、navbar-form 定义导航条中的表单
13、navbar-btn 定义导航条中的按钮
14、navbar-text 定义导航条中的文本
15、navbar-left 菜单靠左
16、navbar-right 菜单靠右
17、navbar-toggle 屏幕变窄后才显示的导航缩略条

```
<!-- 可伸缩菜单 data-target="#.." 需要加#  -->
<div class="navbar navbar-inverse navbar-static-top ">
    <div class="container">
    <div class="navbar-header">
        <button class="navbar-toggle" data-toggle="collapse" data-target="#mymenu">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
         </button>
         <a href="#" class="navbar-brand">LOGO</a>
    </div>
    <div class="collapse navbar-collapse" id="mymenu">
        <ul class="nav navbar-nav">
            <li class="active"><a href="#">首页</a></li>
            <li><a href="#">公司新闻</a></li>
            <li><a href="#">行业动态</a></li>
        </ul>
        <form class="navbar-form navbar-right">
            <div class="form-group">
                <div class="input-group">
                  <input type="text" class="form-control">
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button">Go!</button>
                  </span>
                </div>    
            </div>
        </form>
    </div>
    </div>
</div>
```

#### 路径导航

```
<ol class="breadcrumb">
  <li><a href="#">Home</a></li>
  <li><a href="#">Library</a></li>
  <li class="active">Data</li>
</ol>
```

#### 巨幕

```
<div class="jumbotron">
  <div class="container">
    ...
  </div>
</div>
```

#### bootstrap 模态框

1、modal 声明一个模态框
2、modal-dialog 定义模态框尺寸
3、modal-lg 定义大尺寸模态框
4、modal-sm 定义小尺寸模态框
5、modal-header
6、modal-body
7、modal-footer

```
<button class="btn btn-primary" data-toggle="modal" data-target="#mymodal">大弹出框按钮</button>

<div class="modal fade" id="mymodal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    大尺寸弹出框
                </div>
                <div class="modal-body">
                    模态框主体
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default"  data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
            </div>
        </div>
</div>
```

#### bootstrap 下拉菜单

1、dropdown-toggle
2、dropdown-menu

```
<div class="row">            
    <div class="dropdown">
        <div class="btn btn-primary  dropdown-toggle" data-toggle="dropdown">
            下拉菜单
            <span class="caret"></span>
        </div>
        <ul class="dropdown-menu">
            <li><a href="#">菜单一</a></li>
            <li><a href="#">菜单二</a></li>
            <li><a href="#">菜单三</a></li>
        </ul>
    </div>
</div>
```

#### bootstrap 响应式专题网站实例