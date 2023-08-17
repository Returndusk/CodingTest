function solution(citations) {
  citations.sort((a, b) => b - a);
  let answer = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > i) {
      answer = i + 1;
    } else {
      break;
    }
  }
  return answer;
}
