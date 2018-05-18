function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let location = i - 1;

    while (location >= 0) {
      if (arr[location] > item) {
        arr[location + 1] = arr[location];
        location--;
      } else {
        break;
      }
    }

    arr[location + 1] = item;
  }

  return arr;
}
