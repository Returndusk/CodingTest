function solution(dots) {
  let xMin = Math.min(dots[0][0], dots[1][0], dots[2][0], dots[3][0]);
  let xMax = Math.max(dots[0][0], dots[1][0], dots[2][0], dots[3][0]);
  let yMin = Math.min(dots[0][1], dots[1][1], dots[2][1], dots[3][1]);
  let yMax = Math.max(dots[0][1], dots[1][1], dots[2][1], dots[3][1]);
  
  return (xMax - xMin) * (yMax - yMin);
}