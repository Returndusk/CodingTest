function solution(s) {
  let index = [];
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] in index) {
      answer.push(i - index[s[i]]);
    } else {
      answer.push(-1);
    }
    index[s[i]] = i;
  }
  return answer;
}
