function solution(n) {
  let answer = 0;
  let arr = Array(n).fill;
  
  for (let i = 2; i <= n; i++) {
    if (arr[i] === 0) {
      continue;
    }

    for (let j = i + i; j <= n; j += i) {
      arr[j] = 0;
    }
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i] !== 0) {
      answer += 1;
    }
  }

  return answer;
}
