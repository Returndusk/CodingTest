function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let k = i + 1; k < numbers.length; k++) {
      answer.push(numbers[i] + numbers[k]);
    }
  }

  return Array.from(new Set(answer)).sort((a, b) => a - b);
}
