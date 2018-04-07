function unique3(arr){
 var res = [];
 var obj = {};
 for(var i=0; i<arr.length; i++){
  if( !obj[arr[i]] ){
   obj[arr[i]] = 1;
   res.push(arr[i]);
  }
 } 
 return res;
}
 
console.log('------------方法三---------------');
 //利用对象属性存在的特性，如果没有该属性则存入新数组。