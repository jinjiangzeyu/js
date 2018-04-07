function unique(arr){
 var res = [arr[0]];
 for(var i=1; i<arr.length; i++){
  var repeat = false;
  for(var j=0; j<res.length; j++){
   if(arr[i] === res[j]){
    repeat = true;
    break;
   }
  }
  if(!repeat){
   res.push(arr[i]);
  }
 }
 return res;
}
console.log('------------方法一---------------');
 
console.log(unique([1,1,2,3,5,3,1,5,6,7,4]));
//思路：定义一个新数组，并存放原数组的第一个元素，然后将元素组一一和新数组的元素对比，若不同则存放在新数组中。