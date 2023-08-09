function solution(dots) {
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const slope1 = (dots[j][1] - dots[i][1]) / (dots[j][0] - dots[i][0]);

      for (let k = 0; k < dots.length; k++) {
        if (k === i || k === j) continue;

        for (let l = k + 1; l < dots.length; l++) {
          if (l === i || l === j) continue;

          const slope2 = (dots[l][1] - dots[k][1]) / (dots[l][0] - dots[k][0]);

          if (slope1 === slope2) return 1;
        }
      }
    }
  }
  return 0;
}
