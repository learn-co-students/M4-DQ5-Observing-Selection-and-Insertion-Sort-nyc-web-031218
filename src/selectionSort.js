function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])

  for (let i = arr.length - 1; i > 0; i--) {
    let maxLocation = 0;

    for (let j = 1; j <= i; j++) {
      if (arr[j] > arr[maxLocation]) {
        maxLocation = j;
      }
    }

    let temp = arr[maxLocation];
    arr[maxLocation] = arr[i];
    arr[i] = temp;
  }

  return arr;
}
