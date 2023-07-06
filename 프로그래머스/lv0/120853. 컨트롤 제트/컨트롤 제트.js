function solution(s) {
  const newNum = s.split(' ');
  let sum = 0;

  for (let i = 0; i < newNum.length; i++) {
    if (i < newNum.length - 1 && newNum[i + 1] === 'Z') {
      i++;
    } else if (!isNaN(newNum[i])) {
      sum += parseInt(newNum[i]);
    }
  }

  return sum;
}