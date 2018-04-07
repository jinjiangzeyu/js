function ShellSort(array) {
  var length = array.length;
  var gap = Math.round(length / 2);
  while (gap > 0) {
    for (var i = gap; i < length; i++) {
      var insert = array[i];
      var index = i;
      for (var j = i; j >= 0; j-=gap) {
        if (insert < array[j]) {
          array[j+gap] = array[j];
          index = j;
        }
      }
      array[index] = insert;
    }
    console.log(array);
    console.log("-----------------------");
    gap = Math.round(gap/2 - 0.1);
  }
  return array;
}
 
var arr = [ 13, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10 ];
var result = ShellSort(arr);
console.log(result); 