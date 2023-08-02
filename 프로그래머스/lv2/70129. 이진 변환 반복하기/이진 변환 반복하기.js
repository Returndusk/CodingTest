function solution(s) {
  let answer = [0, 0];

  while (s !== '1') {
    let oneCount = 0;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === '1') {
        oneCount++;
      } else {
        answer[1]++;
      }
    }
    answer[0]++;
    s = oneCount.toString(2);
  }

  return answer;
}
