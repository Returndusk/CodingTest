function solution(spell, dic) {
  let newSpell = spell.sort().join('');

  for (let word of dic) {
    if (word.split('').sort().join('') === newSpell) return 1;
  }

  return 2;
}
