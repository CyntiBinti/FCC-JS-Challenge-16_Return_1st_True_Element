function findElement(arr, func) {
  for (let i = 0; i < arr; i++) {
    let num = arr[i];
    if (func(num)) {
      return num;
    }
  } return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
