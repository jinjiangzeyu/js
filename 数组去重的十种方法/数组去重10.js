function unique10(arr){
 //Set数据结构，它类似于数组，其成员的值都是唯一的
 return Array.from(new Set(arr)); // 利用Array.from将Set结构转换成数组
}
 
console.log('------------方法十---------------');
 
console.log(unique10([1,1,2,3,5,3,1,5,6,7,4]));
//利用 ES6的set 方法。