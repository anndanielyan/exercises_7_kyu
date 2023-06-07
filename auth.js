function lastDigit(n, d) {
  if (d > n.toString().split('').length) {
    return n
      .toString()
      .split('')
      .map((item) => Number(item));
  } else if (d <= 0) {
    return [];
  } else {
    const arr = n.toString().split('');
    const newArray = arr.slice(arr.length - d);
    return newArray.map((item) => {
      return Number(item);
    });
  }
}
console.log(lastDigit(1343, 5));
