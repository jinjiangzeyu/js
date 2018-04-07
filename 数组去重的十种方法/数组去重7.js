function unique7(arr){
 var res = [];
  
 arr.forEach(function(item){
  res.includes(item) ? '' : res.push(item);
 }); 
 return res;
}
 
console.log('------------方法七---------------');
 
console.log(unique7([1,1,2,3,5,3,1,5,6,7,4]));
//利用数组原型对象上的 forEach 和 includes方法。