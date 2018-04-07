function unique9(arr){
 var res = []; 
 for(var i=0; i<arr.length; i++){
  res.lastIndexOf(arr[i]) !== -1 ? '' : res.push(arr[i]);
 }
 return res;
}
 
console.log('------------方法九---------------');
 
console.log(unique9([1,1,2,3,5,3,1,5,6,7,4]));
//利用数组原型对象上的 lastIndexOf 方法。