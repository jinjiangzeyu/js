#引用类型！
##  日期
### 创建日期对象  
```
var a=new Date()
```
1.当不传参时输出电脑的时间       
2.如果传参数就输出参数的时间
###获取时间的方法
####1.getTime()方法
```
var a=new Data()
var b.getTime()
```
返回从1970年1月1日至今的毫秒数，返回值为numbwe类型！
```
var nian=a.getFullyear()  //获取年     
var yue=a.getMonth()  //获取月    
var tian=a.getDate()  //获取日    
var week=a.getDay()  //获取星期几    
var hours=a.getHours()  //获取时    
var min=a.getMinutes()  //获取分    
var sec=a.getSeconds()  //获取秒    
var milli=a.getMilliseconds()  //获取毫秒    
```
##字符串
###字符串创建：
1.字面量定义：
```
var a='1234'
```
2.利用string定义
```
var a=string('1234')
```
3.创建字符串对象
```
var a=new string('1234')
```
###字符串的方法
1.charAt(index)返回指定位置的字符    
2.charCodeAt(index)返回指定位置字符的Unicode编码     
>string.fromcharCode()将Unicode编码转换为字符   

3.search(x)搜索字符串中是否含有x    
>如果有该字符则返回这个元素在字符串中首次出现的下标没有则返回-1   

4.replace(a,b)替换字符串中元素用b替换a
>返回值是新的字符串，对原字符串没有影响  

5.match("hello")提取字符串中的‘hello’返回值为数组类型为object
>如果没有找到就返回null    
也可以通过正则达到检索匹配的目的！！！
```
如：var str="1 plus 2 equal 3"
document.write(str.match(/\d+/g))//返回值是1，2，3
```

6.substring(m，n) 方法用于提取字符串中介于两个指定下标之间的字符，参数不可为负数(包头不包尾)    
slice()是字符串数组通用的方法，参数可以为负数！

7.substr(m，n) 在字符串中抽取从 m下标开始的n个字符。(包头也包尾)对原数组不产生影响

8.split() 将字符串转换成字符串数组！
>如果参数为空，会将所有的元素一一分割成数组的每个元素     
参数为字符串内所有元素的值。则将字符串整体输出。长度为1    
如果参数为某个元素，就以这个元素分割字符串生成数组！

9.concat()合并两个字符串 
```
var a="123"
var b="456"
a.concat(b)
```
10.toLowerCase()/toupperCase()将字符串转换成小写/大写 ！      

11.indexOf()/lastIndexOf()检测参数在字符串中首次/最后一次的位置！          

