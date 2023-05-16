function solution(answers) {
  var answer = [];

  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (one[i % one.length] === answers[i]) score[0]++;
    if (two[i % two.length] === answers[i]) score[1]++;
    if (three[i % three.length] === answers[i]) score[2]++;
  }

  let max = Math.max(score[0], score[1], score[2]);

  if (max === score[0]) answer.push(1);
  if (max === score[1]) answer.push(2);
  if (max === score[2]) answer.push(3);

  return answer;
}