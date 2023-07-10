function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    let result = '';
    let newArr1 = arr1[i].toString(2).padStart(n, 0);
    let newArr2 = arr2[i].toString(2).padStart(n, 0);

    for (let j = 0; j < n; j++) {
      if (newArr1[j] === '1' || newArr2[j] === '1') {
        result += '#';
      } else {
        result += ' ';
      }
    }
    answer.push(result);
  }

  return answer;
}
