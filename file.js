function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length[i] % 2) {
      return arr.length[i];
    } else {
      return 'undefined';
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
