function solve(s) {
  const arr = s.split('');
  const strL = arr.filter((item) => {
    return item === item.toLowerCase();
  });
  const strU = arr.filter((item) => {
    return item === item.toUpperCase();
  });

  if (strL.length === strU.length) {
    return s.toLowerCase();
  }
  if (strU.length > strL.length) return s.toUpperCase();
  return s.toLowerCase();
}
