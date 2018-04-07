function QuickSort(array) {
  var length = array.length;
  if (length <= 1) {
    return array;
  } else {
    var smaller = [];
    var bigger = [];
    var base = [array[0]];
    for (var i = 1; i < length; i++) {
      if (array[i] <= base[0]) {
        smaller.push(array[i]);
      } else {
        bigger.push(array[i]);
      }
    }
    console.log(smaller.concat(base.concat(bigger)));
    console.log("-----------------------");
    return QuickSort(smaller).concat(base.concat(QuickSort(bigger)));
  }
}
 
 
var arr = [ 8, 10, 100, 90, 65, 5, 4, 10, 2, 4 ];
var result = QuickSort(arr);
console.log(result);