##DOM--------文档对象模型
###DOM的属性
|  ---   |nodeName|nameValue| nodeTyope|
| ----   | ----   | ---- |
| 元素节点      | 标签名(大写)|   null     |  1  |
| 属性节点      | 属性名  |   属性值         |  2         |
| 文本节点      | #text|  文本内容  |  3         |
| 注释节点      |   	|   	  |  8         |
| 文档节点      |   	|    	  |  9         |

###DOM方法
getElementById()	返回带有指定 ID 的元素。   
getElementsBysTagName()	返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。   
getElementsBysClassName()	返回包含带有指定类名的所有元素的节点列表。   
getElementsByName()		返回包含带有指定name的所有元素的节点列表。   
appendChild()	把新的子节点添加到指定节点。   
removeChild()	删除子节点。   
replaceChild()	替换子节点。  
insertBefore()	在指定的子节点前面插入新的子节点。   
createAttribute()	创建属性节点。  
createElement()	创建元素节点。    
createTextNode()	创建文本节点。  
getAttribute()	返回指定的属性值。  
setAttribute()	把指定属性设置或修改为指定的值。  