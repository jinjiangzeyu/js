function unique4(arr){
 var res = [];
 for(var i=0; i<arr.length; i++){
  if(res.indexOf(arr[i]) == -1){
   res.push(arr[i]);
  }
 }
 return res;
}
 
console.log('------------方法四---------------');
 
console.log(unique4([1,1,2,3,5,3,1,5,6,7,4]));
//利用数组的indexOf下标属性来查询。