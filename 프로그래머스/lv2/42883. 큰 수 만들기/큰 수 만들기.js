function solution(number, k) {
  let answer = '';
  let idx = 0;

  for (let i = 1; i <= number.length - k; i++) {
    let max = '0';
    for (let j = idx; j <= k + i - 1; j++) {
      if (number[j] > max) {
        max = number[j];
        idx = j + 1;
        if (max === '9') break;
      }
    }
    answer += max;
  }

  return answer;
}
