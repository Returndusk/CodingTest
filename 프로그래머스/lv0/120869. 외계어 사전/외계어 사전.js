function solution(spell, dic) {
  let newSpell = spell.sort().join('');

  for (let i = 0; i < dic.length; i++) {
    if (dic[i].split('').sort().join('') === newSpell) return 1;
  }

  return 2;
}
