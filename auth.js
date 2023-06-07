function i(word) {
  const arrOfVowels = ['a', 'e', 'i', 'o', 'u'];
  if (word.startsWith('I') || word.charAt(0) === word.charAt(0).toLowerCase())
    return 'Invalid word';

  let numOfVowels = 0;
  let numOfCons = 0;
  for (let i = 0; i < word.length; i++) {
    if (arrOfVowels.includes(word.charAt(i).toLowerCase())) {
      numOfVowels++;
    } else {
      numOfCons++;
    }
  }

  if (numOfVowels >= numOfCons) {
    return 'Invalid word';
  }

  return `i${word}`;
}

console.log(i('Peace'));
