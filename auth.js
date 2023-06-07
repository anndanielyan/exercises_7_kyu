function secondSymbol(s, symbol) {
  if (s.indexOf(symbol) === -1 || !s.includes(symbol)) return -1;

  if (s.indexOf(symbol, s.indexOf(symbol) + 1) === -1) return -1;
  return s.indexOf(symbol, s.indexOf(symbol) + 1);
}

console.log(secondSymbol('hello', 'l'));
