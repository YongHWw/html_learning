# HTML

## 标签

1. 标题标签：`<h1></h1>   <h2></h2>`

2. 段落标签：`<p></p>`

3. 换行标签：`<br/>`

4. 字符实体：
   		空格：`&nbsp;`
      		大于：`&gt;`
      		小于：`&lt;`

5. 块标签：
   		`<div></div>  `块元素，表示一块内容，没有具体的语义。
      		` <span></span>`行内元素，表示一行中的一小段内容，没有具体的语义。

6. 含样式和语义的标签：
   		`<em> `标签 行内元素，表示语气中的强调词，**斜体**
      		`<i>` 标签 行内元素，表示专业词汇，**斜体**
      		`<b> `标签 行内元素，表示文档中的关键字或者产品名，**加粗**
      		`<strong> `标签 行内元素，表示非常重要的内容，**加粗**

7. 图像标签：`<img src="images/pic.jpg" alt="产品图片" />`
   		src属性 定义图片的引用地址
      		alt属性 定义图片加载失败时显示的文字，搜索引擎会使用这个文字收录图片、盲人读屏软					件会读取这个文字让盲人识别图片，所以此属性非常重要。

8. 链接标签：`<a href=""></a>`
           href属性 定义跳转的地址
           title属性 定义鼠标悬停时弹出的提示文字框
           target属性 定义链接窗口打开的位置
                        `target="_self"`缺省值，新页面替换原来的页面，在原来位置打开
                        `target="_blank"`新页面会在新开的一个浏览器窗口打开

9. 列表标签：
           有序列表：在网页上定义一个有编号的内容列表可以用<ol>、<li>配合使用来实现，代码如下：

   ```
   <ol>
       <li>列表文字一</li>
       <li>列表文字二</li>
       <li>列表文字三</li>
   </ol>
   ```

   在网页上生成的列表，每条项目上会按1、2、3编号，有序列表在实际开发中较少使用。
   

   ​         无序列表：在网页上定义一个无编号的内容列表可以用<ul>、<li>配合使用来实现，代码如下：

   ```
   <ul>
       <li><a href="#">新闻标题一</a></li>
       <li><a href="#">新闻标题二</a></li>
       <li><a href="#">新闻标题三</a></li>
   </ul>
   ```

   在网页上生成的列表，每条项目上会有一个小图标，这个小图标在不同浏览器上显示效果不同，所以一般会用样式去掉默认的小图标，如果需要图标，可以用样式自定义图标，从而达到在不同浏览器上显示的效果相同,实际开发中一般用这种列表。

   实际应用实例：
   ![产品开发流程图片](../pic/news_list.jpg)定义列表

   ​           定义列表：通常用于术语的定义。`<dl>`标签表示列表的整体。`<dt>`标签定义术语的题目。`<dd>`标签是术语的解释。一个`<dl>`中可以有多个题目和解释，代码如下：

   ```
   <h3>前端三大块</h3>
   <dl>
       <dt>html</dt>
       <dd>负责页面的结构</dd>
   
       <dt>css</dt>
       <dd>负责页面的表现</dd>
   
       <dt>javascript</dt>
       <dd>负责页面的行为</dd>
   
   </dl>
   ```

10. 表格标签：`<table> </table>`

    a. `<table>`标签：声明一个表格，它的常用属性如下：

    ​		border属性 定义表格的边框，设置值是数值

    ​		cellpadding属性 定义单元格内容与边框的距离，设置值是数值

    ​		cellspacing属性 定义单元格与单元格之间的距离，设置值是数值

    ​		align属性 设置整体表格相对于浏览器窗口的水平对齐方式,设置值有：left | center | right

    b. `<tr>`标签：定义表格中的一行

    c. `<td>`和`<th>`标签：定义一行中的一个单元格，td代表普通单元格，th表示表头单元格，它们的常用属性如下：
    		align 设置单元格中内容的水平对齐方式,设置值有：left | center | right
    		valign 设置单元格中内容的垂直对齐方式 top | middle | bottom
    		colspan 设置单元格水平合并，设置值是数值
    		rowspan 设置单元格垂直合并，设置值是数值
        	bgcolor 设置背景色
    
11. 表单标签：`<form> </form>`表单用于搜集不同类型的用户输入，表单由不同类型的标签组成，相关标签及属性用法如下：

       a、`<form>`标签 定义整体的表单区域

       - action属性 定义表单数据提交地址
       - method属性 定义表单提交的方式，一般有“get”方式和“post”方式

       b、`<label>`标签 为表单元素定义文字标注

       c、`<input>`标签 定义通用的表单元素

       - type属性
         - type="text" 定义单行文本输入框
         - type="password" 定义密码输入框
         - type="radio" 定义单选框
         - type="checkbox" 定义复选框
         - type="file" 定义上传文件
         - type="submit" 定义提交按钮
         - type="reset" 定义重置按钮
         - type="button" 定义一个普通按钮
         - type="image" 定义图片作为提交按钮，用src属性定义图片地址
         - type="hidden" 定义一个隐藏的表单域，用来存储值
       - value属性 定义表单元素的值
       - name属性 定义表单元素的名称，此名称是提交数据时的键名

       d、`<textarea>`标签 定义多行文本输入框

       e、`<select>`标签 定义下拉表单元素

       f、`<option>`标签 与`<select>`标签配合，定义下拉表单元素中的选项

```html
<form action="" method="get">

		<div>
			<!-- for属性绑定label，点击用户名便可激活输入框 -->
			<label for="username">用户名：</label>
			<input type="text" name="username" id="username">
		</div>
		
		<div>
			<label>密&nbsp;&nbsp;&nbsp;码：</label>
			<input type="password" name="password">
		</div>

		<div>
			<label>性&nbsp;&nbsp;&nbsp;别：</label>
			<input type="radio" name="gender" value="0">男
			<input type="radio" name="gender" value="1">女
		</div>

		<div>
			<label>爱&nbsp;&nbsp;&nbsp;好：</label>
			<input type="checkbox" name="habel" value="0">篮球
			<input type="checkbox" name="habel" value="1">学习
			<input type="checkbox" name="habel" value="2">足球
			<input type="checkbox" name="habel" value="3">Python
		</div>

		<div>
			<label>照&nbsp;&nbsp;&nbsp;片：</label>
			<input type="file">
		</div>

		<div>
			<label>个人介绍:</label>
			<textarea name="introduce"></textarea>
		</div>

		<div>
			<label>籍贯：</label>
			<select name="site">
			    <option value="0">北京</option>
			    <option value="1">上海</option>
			    <option value="2">广州</option>
			    <option value="3">深圳</option>
			</select>
		</div>

		<div>
			<input type="submit" value="提交">
			<!-- input类型为submit定义提交按钮  
     还可以用图片控件代替submit按钮提交，一般会导致提交两次，不建议使用。如：
     <input type="image" src="xxx.gif">
			-->
			<input type="reset" value="重置">
		</div>

	</form>
```

