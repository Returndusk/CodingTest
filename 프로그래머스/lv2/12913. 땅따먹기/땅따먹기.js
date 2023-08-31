function solution(land) {
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      let maxValue = 0;
      for (let k = 0; k < 4; k++) {
        if (j !== k) {
          maxValue = Math.max(maxValue, land[i - 1][k]);
        }
      }
      land[i][j] += maxValue;
    }
  }

  return Math.max(...land[land.length - 1]);
}
