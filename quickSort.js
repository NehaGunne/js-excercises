const quickSort = (arr) => {
    if(arr.length<2){
        return arr
    }
  let pivot = arr[arr.length-1];
  let leftarr = [];
  let rightarr = [];
  for (let i =0;i<arr.length-1;i++) {
    if (arr[i] < pivot) {
      leftarr.push(arr[i]);
    }
    if (arr[i] > pivot) {
      rightarr.push(arr[i]);
    }
  }
  console.log(quickSort(leftarr),'left');
  console.log(quickSort(rightarr),'right');
  return [...quickSort(leftarr),pivot,...quickSort(rightarr)];
};
console.log(quickSort([2, 3, 1, 4]));
