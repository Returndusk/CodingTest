function solution(n) {
  const oneCount = (v) =>
    v
      .toString(2)
      .split('')
      .filter((v) => v === '1').length;
  let nPlus = n + 1;
  while (true) {
    if (oneCount(n) === oneCount(nPlus)) break;
    nPlus++;
  }
  return nPlus;
}
