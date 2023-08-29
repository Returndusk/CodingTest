function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let [a, b, c] = commands[i];
    let count = array.slice(a - 1, b).sort((a, b) => a - b)
    answer.push(count[c - 1]);
  }

  return answer;
}
