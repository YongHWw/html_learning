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
// 通过标签名称获取li元素，生成一个选择集，赋值给aLi
var aLi = document.getElementsByTagName('li');

// 读取选择集内元素的个数
//alert(aLi.length);  // 弹出13

var iLen = aLi.length;


//给一个li设置背景色
//aLi[0].style.backgroundColor = 'gold';

// 不能给选择集设置样式属性
//aLi.style.backgroundColor = 'gold';

/*
同时给所有的li加背景色
for(var i=0;i<iLen;i++)
{
	aLi[i].style.backgroundColor = 'gold';
}
*/


var oUl = document.getElementById('list1');
var aLi2 = oUl.getElementsByTagName('li');

var iLen2 = aLi2.length;

for(var i=0;i<iLen2;i++)
{
	if(i%2==0)
	{
		aLi2[i].style.backgroundColor = 'gold';
	}
}
```

**课堂练习**
使用循环操作列表中的每个元素





## 字符串处理方法

1、字符串合并操作：“ + ”

```
var iNum01 = 12;
var iNum02 = 24;
var sNum03 = '12';
var sTr = 'abc';
alert(iNum01+iNum02);  //弹出36
alert(iNum01+sNum03);  //弹出1212 数字和字符串相加等同于字符串相加
alert(sNum03+sTr);     // 弹出12abc
```

2、parseInt() 将数字字符串转化为整数

```
var sNum01 = '12';
var sNum02 = '24';
var sNum03 = '12.32';
alert(sNum01+sNum02);  //弹出1224
alert(parseInt(sNum01)+parseInt(sNum02))  //弹出36
alert(sNum03)   //弹出数字12 将字符串小数转化为数字整数
```

3、parseFloat() 将数字字符串转化为小数

```
var sNum03 = '12.32'
alert(parseFloat(sNum03));  //弹出 12.32 将字符串小数转化为数字小数
```

4、split() 把一个字符串分隔成字符串组成的数组

```
var sTr = '2017-4-22';
var aRr = sTr.split("-");
var aRr2= sTr.split("");

alert(aRr);  //弹出['2017','4','2']
alert(aRr2);  //弹出['2','0','1','7','-','4','-','2','2']
```

5、charAt() 获取字符串中的某一个字符

```
var sId = "#div1";
var sTr = sId.charAt(0);
alert(sTr); //弹出 #
```

6、indexOf() 查找字符串是否含有某字符

```
var sTr = "abcdefgh";
var iNum = sTr.indexOf("c");
alert(iNum); //弹出2
```

7、substring() 截取字符串 用法： substring(start,end)（不包括end）

```
var sTr = "abcdefghijkl";
var sTr2 = sTr.substring(3,5);
var sTr3 = sTr.substring(1);

alert(sTr2); //弹出 de
alert(sTr3); //弹出 bcdefghijkl
```

8、toUpperCase() 字符串转大写

```
var sTr = "abcdef";
var sTr2 = sTr.toUpperCase();
alert(sTr2); //弹出ABCDEF
```

9、toLowerCase() 字符串转小写

```
var sTr = "ABCDEF";
var sTr2 = sTr.toLowerCase();
alert(sTr2); //弹出abcdef
```

**字符串反转**

```
var str = 'asdfj12jlsdkf098';
var str2 = str.split('').reverse().join('');

alert(str2);
```

## 类型转换

1、直接转换 parseInt() 与 parseFloat()

```
alert('12'+7); //弹出127
alert( parseInt('12') + 7 );  //弹出19 
alert( parseInt(5.6));  // 弹出5
alert('5.6'+2.3);  // 弹出5.62.3
alert(parseFloat('5.6')+2.3);  // 弹出7.8999999999999995
alert(0.1+0.2); //弹出 0.3000000000000004
alert((0.1*100+0.2*100)/100); //弹出0.3
alert((parseFloat('5.6')*100+2.3*100)/100); //弹出7.9
```

2、隐式转换 “==” 和 “-”

```
if('3'==3)
{
    alert('相等');
}

// 弹出'相等'
alert('10'-3);  // 弹出7
```

3、NaN 和 isNaN

```
alert( parseInt('123abc') );  // 弹出123
alert( parseInt('abc123') );  // 弹出NaN
```

**课堂练习**
制作一个计算器，可以计算加、减、乘、除，用户输入非数字或者置空可以提示