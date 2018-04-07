function unique8(arr){
 var i,
  j,
  len = arr.length; 
 for(i = 0; i < len; i++){
  for(j = i + 1; j < len; j++){
   if(arr[i] == arr[j]){
    arr.splice(j,1);
    len--;
    j--;
   }
  }
 }
 return arr;
}
 
console.log('------------方法八---------------');
 
console.log(unique8([1,1,2,3,5,3,1,5,6,7,4]));
// 利用数组原型对象上的 splice 方法。