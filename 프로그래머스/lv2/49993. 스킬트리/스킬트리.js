function solution(skill, skill_trees) {
  return skill_trees
    .map((v) => {
      let result = '';
      for (let char of v) {
        if (skill.includes(char)) {
          result += char;
        }
      }
      return result;
    })
    .filter((v) => skill.startsWith(v)).length;
}
