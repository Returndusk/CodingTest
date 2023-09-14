function solution(number, limit, power) {
  let array = new Array(number).fill(1);

  for (let i = 2; i <= number; i++) {
    for (let j = i; j <= number; j += i) {
      array[j - 1]++;
    }
  }

  return array.map((v) => (v > limit ? power : v)).reduce((a, b) => a + b);
}
