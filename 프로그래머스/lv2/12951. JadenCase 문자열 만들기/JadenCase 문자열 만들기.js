function solution(s) {
  let answer = '';
  let start = true;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      answer += s[i];
      start = true;
    } else {
      if (start) {
        answer += s[i].toUpperCase();
        start = false;
      } else {
        answer += s[i].toLowerCase();
      }
    }
  }

  return answer;
}
 