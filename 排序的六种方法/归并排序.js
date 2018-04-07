function MergeSort(array) {
  var length = array.length;
  if (length <= 1) {
    return array;
  } else {
    var num = Math.ceil(length/2);
    var left = MergeSort(array.slice(0, num));
    var right = MergeSort(array.slice(num, length));
    return merge(left, right);
  }
}
 
function merge(left, right) {
  console.log(left);
  console.log(right);
  var a = new Array();
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      var temp = left.shift();
      a.push(temp);
    } else {
      var temp = right.shift();
      a.push(temp);
    }
  }
  if (left.length > 0) {
    a = a.concat(left);
  }
  if (right.length > 0) {
    a = a.concat(right);
  }
  console.log(a);
  console.log("-----------------------------");
  return a;
}
 
var arr = [ 13, 14, 94, 33, 82, 25, 59, 94, 65, 23, 45, 27, 73, 25, 39, 10 ];
var result = MergeSort(arr);
console.log(result);