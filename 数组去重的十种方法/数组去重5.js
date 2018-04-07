function unique5(arr){
 var res = [];
  
 for(var i=0; i<arr.length; i++){
  if( !res.includes(arr[i]) ){ // 如果res新数组包含当前循环item
   res.push(arr[i]);
  }
 }
 return res;
}
 
console.log('------------方法五---------------');
 
console.log(unique5([1,1,2,3,5,3,1,5,6,7,4]));
//利用数组原型对象上的includes方法。