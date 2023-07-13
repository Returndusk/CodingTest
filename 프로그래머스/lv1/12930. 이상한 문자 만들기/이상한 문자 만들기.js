function solution(s) {
  let array = s.split(' ');
  let answer = '';

  for (let i = 0; i < array.length; i++) {
    let str = array[i];
    for (let j = 0; j < str.length; j++) {
      j % 2 === 0
        ? (answer += str[j].toUpperCase())
        : (answer += str[j].toLowerCase());
    }
    if (i < array.length - 1) answer += ' ';
  }

  return answer;
}
