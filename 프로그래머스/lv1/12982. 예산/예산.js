function solution(d, budget) {
  const newArr = d.sort((a, b) => a - b);
  let sum = 0;

  for (i = 0; i < newArr.length; i++) {
    sum += newArr[i];
    if (sum > budget) {
      return i;
    }
  }
  return i;
}
