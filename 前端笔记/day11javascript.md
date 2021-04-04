## 条件语句

通过条件来控制程序的走向，就需要用到条件语句。

**运算符**
1、算术运算符： +(加)、 -(减)、 *(乘)、 /(除)、 %(求余)
2、赋值运算符：=、 +=、 -=、 *=、 /=、 %=
3、条件运算符：==、===、>、>=、<、<=、!=、&&(而且)、||(或者)、!(否)

**if else**

```
var iNum01 = 3;
var iNum02 = 5;
var sTr;
if(iNum01>iNum02){
    sTr = '大于';
}
else
{
    sTr = '小于';
}
alert(sTr);
```

**理解练习**
制作单个按钮点击切换元素的显示和隐藏效果

**多重if else语句**

```
var iNow = 1;
if(iNow==1)
{
    ... ;
}
else if(iNow==2)
{
    ... ;
}
else
{
    ... ;
}
```

**switch语句**
多重if else语句可以换成性能更高的switch语句

```
var iNow = 1;

switch (iNow){
    case 1:
        ...;
        break;
    case 2:
        ...;
        break;    
    default:
        ...;
}
```

**理解练习**
制作随着星期换背景的页面

## 数组及操作方法

数组就是一组数据的集合，javascript中，数组里面的数据可以是不同类型的。

### **定义数组的方法**

```
//对象的实例创建
var aList = new Array(1,2,3);

//直接量创建
var aList2 = [1,2,3,'asd'];
```

### **操作数组中数据的方法**

1、获取数组的长度：aList.length;

```
var aList = [1,2,3,4];
alert(aList.length); // 弹出4
```

2、用下标操作数组的某个数据：aList[0];

```
var aList = [1,2,3,4];
alert(aList[0]); // 弹出1
```

3、join() 将数组成员通过一个分隔符合并成字符串

```
var aList = [1,2,3,4];
alert(aList.join('-')); // 弹出 1-2-3-4
```

4、push() 和 pop() 从数组最后增加成员或删除成员

```
var aList = [1,2,3,4];
aList.push(5);
alert(aList); //弹出1,2,3,4,5
aList.pop();
alert(aList); // 弹出1,2,3,4
```

5、unshift()和 shift() 从数组前面增加成员或删除成员

```
var aList = [1,2,3,4];
aList.unshift(5);
alert(aList); //弹出5,1,2,3,4
aList.shift();
alert(aList); // 弹出1,2,3,4
```

6、reverse() 将数组反转

```
var aList = [1,2,3,4];
aList.reverse();
alert(aList);  // 弹出4,3,2,1
```

7、indexOf() 返回数组中元素第一次出现的索引值

```
var aList = [1,2,3,4,1,3,4];
alert(aList.indexOf(1));
```

8、splice() 在数组中增加或删除成员

```
var aList = [1,2,3,4];
aList.splice(2,1,7,8,9); //从第2个元素开始，删除1个元素，然后在此位置增加'7,8,9'三个元素
alert(aList); //弹出 1,2,7,8,9,4
```

### **多维数组**

多维数组指的是数组的成员也是数组的数组。

```
var aList = [[1,2,3],['a','b','c']];

alert(aList[0][1]); //弹出2;
```

批量操作数组中的数据，需要用到循环语句



## 循环语句

程序中进行有规律的重复性操作，需要用到循环语句。

### **for循环**

```
for(var i=0;i<len;i++)
{
    ......
}
```

**课堂练习**
1、将数组中的数据分别用弹框弹出
2、将数组中的数据放入到页面中的列表中

### **while循环**

```
var i=0;

while(i<8){
    ......
    i++;
}
```

### **数组去重**

```
var aList = [1,2,3,4,4,3,2,1,2,3,4,5,6,5,5,3,3,4,2,1];

var aList2 = [];

for(var i=0;i<aList.length;i++)
{
    if(aList.indexOf(aList[i])==i)
    {
        aList2.push(aList[i]);
    }
}

alert(aList2);
```



## 获取元素方法二

可以使用内置对象document上的**getElementsByTagName**方法来获取页面上的某一种**标签**，获取的是一个选择集，不是数组，但是可以用下标的方式操作选择集里面的标签元素。

```
<script type="text/javascript">
    window.onload = function(){
        var aLi = document.getElementsByTagName('li');
        // aLi.style.backgroundColor = 'gold'; // 出错！不能同时设置多个li
        alert(aLi.length);
        aLi[0].style.backgroundColor = 'gold';
    }
</script>
....
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
</ul>
```

**课堂练习**
使用循环操作列表中的每个元素