function solution(picture, k) {
  let result = [];

  for (let row of picture) {
    let newRow = row
      .split('')
      .map((char) => char.repeat(k))
      .join('');
    for (let i = 0; i < k; i++) {
      result.push(newRow);
    }
  }

  return result;
}