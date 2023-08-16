function solution(k, m, score) {
  score.sort((a, b) => b - a);

  let answer = 0;

  for (let i = 0; i < score.length; i += m) {
    if (i + m > score.length) break;
    let minPrice = Math.min(...score.slice(i, i + m));
    let price = minPrice * m;
    answer += price;
  }

  return answer;
}
