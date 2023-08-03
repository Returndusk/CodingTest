function solution(n, words) {
  let answer = [0, 0];
  let used = [];

  for (let i = 0; i < words.length; i++) {
    if (
      used.includes(words[i]) ||
      (i !== 0 && words[i - 1].slice(-1) !== words[i].charAt(0))
    ) {
      answer[0] = (i % n) + 1;
      answer[1] = Math.ceil((i + 1) / n);
      return answer;
    }
    used.push(words[i]);
  }
  return answer;
}
