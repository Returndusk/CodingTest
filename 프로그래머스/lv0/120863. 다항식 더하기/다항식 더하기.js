function solution(polynomial) {
  let answer = '';
  let array = polynomial.split(' + ');
  let xNumber = 0;
  let Number = 0;

  for (let i of array) {
    if (i.includes('x')) {
      xNumber += i === 'x' ? 1 : parseInt(i);
    } else {
      Number += parseInt(i);
    }
  }

  if (xNumber === 1) {
    answer = 'x';
  } else if (xNumber > 1) {
    answer = `${xNumber}x`;
  }

  if (Number > 0) {
    answer += answer ? ` + ${Number}` : `${Number}`;
  }

  return answer;
}
