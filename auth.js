function consecutive(arr, a, b) {
  if (arr.indexOf(a) === arr.indexOf(b) + 1) return true;
  if (arr.indexOf(b) === arr.indexOf(a) + 1) return true;
  return false;
}

console.log(consecutive([1, 3, 5, 7], 3, 1));
