### 视口

视口是移动设备上用来显示网页的区域，一般会比移动设备可视区域大，宽度可能是980px或者1024px，目的是为了显示下整个为PC端设计的网页，这样带来的后果是移动端会出现横向滚动条，为了避免这种情况，移动端会将视口缩放到移动端窗口的大小。这样会让网页不容易观看，可以用 meta 标签，name=“viewport ” 来设置视口的大小，将视口的大小设置为和移动设备可视区一样的大小。

设置方法如下( 快捷方式：meta:vp + tab )：

```
<head>
......
<meta name="viewport" content="width=device-width, user-scalable=no,
 initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
......
</head>
```

背景图强制改变大小，可以使用background新属性

**background新属性**
background-size:

- length：用长度值指定背景图像大小。不允许负值。
- percentage：用百分比指定背景图像大小。不允许负值。
- auto：背景图像的真实大小。
- cover：将背景图像等比缩放到完全覆盖容器，背景图像有可能超出容器。
- contain：将背景图像等比缩放到宽度或高度与容器的宽度或高度相等，背景图像始终被包含在容器内。



## 适配布局类型

### PC及移动端页面适配方法

设备屏幕有多种不同的分辨率，页面适配方案有如下几种：

1、全适配：响应式布局+流体布局
2、移动端适配：

- 流体布局+少量响应式
- 基于rem的布局

### 流体布局

流体布局，就是使用百分比来设置元素的宽度，元素的高度按实际高度写固定值，流体布局中，元素的边线无法用百分比，可以使用样式中的计算函数 calc() 来设置宽度，或者使用 box-sizing 属性将盒子设置为从边线计算盒子尺寸。

**calc()**
可以通过计算的方式给元素加尺寸，比如： width：calc(25% - 4px);

**box-sizing**
1、content-box 默认的盒子尺寸计算方式
2、border-box 置盒子的尺寸计算方式为从边框开始，盒子的尺寸，边框和内填充算在盒子尺寸内

### 响应式布局

响应式布局就是使用媒体查询的方式，通过查询浏览器宽度，不同的宽度应用不同的样式块，每个样式块对应的是该宽度下的布局方式，从而实现响应式布局。响应式布局的页面可以适配多种终端屏幕（pc、平板、手机）。

相应布局的伪代码如下：

```
@media (max-width:960px){
    .left_con{width:58%;}
    .right_con{width:38%;}
}
@media (max-width:768px){
    .left_con{width:100%;}
    .right_con{width:100%;}
}
```

### 基于rem的布局

首先了解em单位，em单位是参照元素自身的文字大小来设置尺寸，rem指的是参照根节点的文字大小，根节点指的是html标签，设置html标签的文字大小，其他的元素相关尺寸设置用rem，这样，所有元素都有了统一的参照标准，改变html文字的大小，就会改变所有元素用rem设置的尺寸大小。

**cssrem安装**

cssrem插件可以动态地将px尺寸换算成rem尺寸

下载本项目，比如：git clone https://github.com/flashlizi/cssrem 进入packages目录：Sublime Text -> Preferences -> Browse Packages... 复制下载的cssrem目录到刚才的packges目录里。 重启Sublime Text。

配置参数 参数配置文件：Sublime Text -> Preferences -> Package Settings -> cssrem px_to_rem - px转rem的单位比例，默认为40。 max_rem_fraction_length - px转rem的小数部分的最大长度。默认为6。 available_file_types - 启用此插件的文件类型。默认为：[".css", ".less", ".sass"]。