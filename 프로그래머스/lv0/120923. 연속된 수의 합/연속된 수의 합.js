function solution(num, total) {
  let answer = [];
  let mid = total / num;
  let start;

  if (num % 2 === 1) {
    start = mid - (num - 1) / 2;
  } else {
    start = mid - num / 2 + 0.5;
  }

  for (let i = 0; i < num; i++) {
    answer.push(start + i);
  }
  return answer;
}
