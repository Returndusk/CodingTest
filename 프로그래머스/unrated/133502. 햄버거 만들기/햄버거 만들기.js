function solution(ingredient) {
  const newArray = new Array(ingredient.length);
  let idx = 0;
  let answer = 0;

  for (let ing of ingredient) {
    newArray[idx] = ing;
    idx++;

    if (idx >= 4) {
      if (
        newArray[idx - 4] === 1 &&
        newArray[idx - 3] === 2 &&
        newArray[idx - 2] === 3 &&
        newArray[idx - 1] === 1
      ) {
        idx -= 4;
        answer++;
      }
    }
  }

  return answer;
}
