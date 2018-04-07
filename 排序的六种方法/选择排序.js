function SelectionSort(array) {
  var length = array.length;
  for (var i = 0; i < length; i++) { //缩小选择的范围
    var min = array[i]; //假定范围内第一个为最小值
    var index = i; //记录最小值的下标
    for (var j = i + 1; j < length; j++) { //在范围内选取最小值
      if (array[j] < min) {
        min = array[j];
        index = j;
      }
    }
    if (index != i) { //把范围内最小值交换到范围内第一个
      var temp = array[i];
      array[i] = array[index];
      array[index] = temp;
    }
    console.log(array);
    console.log("---------------------");
  }
  return array;
}
 
var arr = [ 1, 10, 100, 90, 65, 5, 4, 10, 2, 4 ];
var result = SelectionSort(arr);
console.log(result);