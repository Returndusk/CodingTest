function solution(quiz) {
  
  let answer = [];

  for (let i = 0; i < quiz.length; i++) {
    let newArray = quiz[i].split(' ');
    let x = parseInt(newArray[0]);
    let y = parseInt(newArray[2]);
    let z = parseInt(newArray[4]);
    let operator = newArray[1];

    if (operator === '+') {
      x + y === z ? answer.push('O') : answer.push('X');
    }
    if (operator === '-') {
      x - y === z ? answer.push('O') : answer.push('X');
    }
  }

  return answer;
}
