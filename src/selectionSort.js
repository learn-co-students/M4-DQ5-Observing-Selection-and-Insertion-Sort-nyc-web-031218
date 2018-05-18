function selectionSort(arr) {
  // let pointer
  // // your code here!
  // // arr is an array of unsorted integers (i.e. [ 1, 2, 3, 5, 6, 8])
  // for (var i = 0; i < arr.length; i++) {
  //   pointer = i
  //   for (var j = i; j < arr.length; j++) {
  //     if (arr[j] < arr[pointer])
  //     {pointer = j}
  //   }
  //   let element = arr.splice(pointer, 1)
  //   //remove 1 element at index pointer(smallest value)
  //   arr.splice(i, 0, element)
  //   //inserting element at index i(removes 0)
  // }


  for(var i = 0; i < arr.length; i++) {
   var min = i;
   for(var j = i + 1; j < arr.length; j++) {
     if(arr[j] < arr[min]) {
       min = j;
     }
   }
   if(i !== min) {
     swap(arr, i, min);
   }
 }
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
