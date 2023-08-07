function solution(array) {
  const newArray = Array.from(new Set(array));

  const countArray = newArray.map((num) => [num, array.filter((n) => n === num).length]);

  countArray.sort((a, b) => b[1] - a[1]);

  const max = countArray[0][1];

  return countArray.filter((v) => v[1] === max).length > 1 ? -1 : countArray[0][0];
}
