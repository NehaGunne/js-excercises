const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      // console.log(arr);
      j = j - 1;
    }
    arr[j + 1] = key;
    /*  console.log('key',arr[j+1]);
          console.log('arr',arr); */
  }
  return arr;
};
console.log(insertionSort([3, 2, 4, 1]));

//Big O=O(n^2)
