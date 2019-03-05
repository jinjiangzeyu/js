##BOM---浏览器对象模型
###1.window对象----表示浏览器窗口
1.全局变量都是window对象的属性      
2.全局函数都是window对象的方法    
3.甚至HTML DOM的document也是window对象的属性之一！   

####window尺寸
对于IE\谷歌\火狐\欧朋\safari使用：   
window.innerHerght/innerWidth  浏览器的内部宽高      
对于IE8/7/6/5     
document.doucmentElement.clientHeight/clientWidth 可见区域宽度

####window方法
提示框.alert()确认框.confirm()    
文本输入框.prompt()打开新窗口.open()      
窗口移动到位置moveTo(x,y)     
窗口移动的尺寸 moveBy(x,y)    
窗口宽高尺寸 resizeTo(x,y)    
窗口宽高变化的尺寸 resizeBy(x,y)   
一次性定时器 setTimeOut()  取消 clearTimeOut()    
一次性定时器 setInterval()  取消 clearInterval()   

###2.Localtion对象
####提供了当前窗口中加载的文档有关信息以及一些导航功能       
它既是window对象的属性，也是document对象的属性  

hash----设置返回从#开始的URL  
*host----设置返回主机名当前的URL端口号（简称 端口号）  
hostname-----当前URL的主机名  
*href-----完整的URL  
pathname-----当前URL的路径部分  
port-----当前URL的端口号  
protocol-----当前URL的协议  
search-----从？开始的URL（查询部分）  

###3.screen对象
####包含有关客户端显示屏幕的信息

###4.Navgator对象
####包含浏览器的名称、版本、语言、系统、平台、用户特性字符串
userAgent---当前浏览器头部的信息        
cookieEnabled---返回指明浏览器是否启用cookie的布尔值     
plantfrom----返回运行浏览器的操作系统平台     

###5History对象
####保存从窗口被打开起的历史记录     
back()----加载history列表中的前一个url    
forward()----加载history列表中的后一个url    
go()----加载history列表中的某个具体页面
