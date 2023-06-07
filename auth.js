function counter() {
  let x = 0;
  return function () {
    x++;
    return x;
  };
}

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
