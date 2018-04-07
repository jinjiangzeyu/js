function unique2(arr){
 var arr2 = arr.sort();
 var res = [arr2[0]];
 for(var i=1; i<arr2.length; i++){
  if(arr2[i] !== res[res.length-1]){
   res.push(arr2[i]);
  }
 } 
 return res;
}
 
console.log('------------方法二---------------');
 
console.log(unique2([1,1,2,3,5,3,1,5,6,7,4]));
// 思路：先将原数组排序，在与相邻的进行比较，如果不同则存入新数组。