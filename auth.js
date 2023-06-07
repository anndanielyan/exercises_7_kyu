function validParentheses(parenStr) {
  const arr = [];
  for (let i = 0; i < parenStr.length; i++) {
    const el = parenStr[i];
    if (el === '(') arr.push(el);
    if (el === ')') {
      if (arr.length === 0) return false;
      arr.pop();
    }
  }
  return arr.length === 0;
}
