function solution(survey, choices) {
  let answer = '';
  const 점수모음 = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i++) {
    const [비동의, 동의] = survey[i].split('');
    const 선택 = choices[i];

    const 점수 =
      선택 === 1 || 선택 === 7
        ? 3
        : 선택 === 2 || 선택 === 6
        ? 2
        : 선택 === 3 || 선택 === 5
        ? 1
        : 0;

    if (선택 <= 3) {
      점수모음[비동의] += 점수;
    } else if (선택 >= 5) {
      점수모음[동의] += 점수;
    }
  }
  
  answer += 점수모음['R'] < 점수모음['T'] ? 'T' : 'R';
  answer += 점수모음['C'] < 점수모음['F'] ? 'F' : 'C';
  answer += 점수모음['J'] < 점수모음['M'] ? 'M' : 'J';
  answer += 점수모음['A'] < 점수모음['N'] ? 'N' : 'A';

  return answer;
}
