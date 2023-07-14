function solution(n) {
  let answer = 0;

  for (let i = 1; answer < n ; i++) {
    if (!(i % 3 === 0 || i.toString().includes('3'))) answer++;
    if (answer === n) return i;
  }
}
