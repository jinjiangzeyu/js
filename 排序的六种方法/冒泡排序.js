function BubbleSort(array) {
  var length = array.length;
  for (var i = length - 1; i > 0; i--) { //用于缩小范围
    for (var j = 0; j < i; j++) { //在范围内进行冒泡，在此范围内最大的一个将冒到最后面
      if (array[j] > array[j+1]) { 
        var temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
    console.log(array);
    console.log("-----------------------------");
  }
  return array;
}
 
 
var arr = [10,9,8,7,7,6,5,11,3];
var result = BubbleSort(arr);
console.log(result); 