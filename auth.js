function killer(suspects, deadPeople) {
  for (let suspect in suspects) {
    if (
      deadPeople.every((deadP) => {
        return suspects[suspect].includes(deadP);
      })
    )
      return suspect;
  }
  return;
}

console.log(
  killer(
    {
      James: ['Jacob', 'Bill', 'Lucas'],
      Johnny: ['David', 'Kyle', 'Lucas'],
      Peter: ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
  )
);
