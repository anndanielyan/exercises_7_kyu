function separateTypes(input) {
  const num = input.filter((i) => {
    return typeof i === 'number';
  });

  const str = input.filter((i) => {
    return typeof i === 'string';
  });

  const boolean = input.filter((i) => {
    return typeof i === 'boolean';
  });

  const opt = {};

  if (num.length > 0) opt.number = num;
  if (str.length > 0) opt.string = str;
  if (boolean.length > 0) opt.boolean = boolean;
  return opt;
}
