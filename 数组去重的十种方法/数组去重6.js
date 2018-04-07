function unique6(arr){
 var res = [];
  
 res = arr.filter(function(item){
  return res.includes(item) ? '' : res.push(item);
 });
 return res;
}
 
console.log('------------方法六---------------');
 
console.log(unique6([1,1,2,3,5,3,1,5,6,7,4]));
//利用数组原型对象上的 filter 和 includes方法。