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