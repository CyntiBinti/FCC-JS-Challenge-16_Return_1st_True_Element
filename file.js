function findElement(arr, func) {
  for (let i = 0; i < arr; i++) {
    if (arr[i] % 2) {
      return num = arr[i];
    } else {
      return 'undefined';
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
