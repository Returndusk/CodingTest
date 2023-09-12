function solution(score) {
  const average = score.map((v) => (v[0] + v[1]) / 2);
  const rank = average.map((avg) => 1 + average.filter((v) => v > avg).length);
  return rank;
}
