function solution(numlist, n) {
  const compare = (a, b) => {
    let compareA = Math.abs(a - n);
    let compareB = Math.abs(b - n);

    if (compareA === compareB) return b - a;
    return compareA - compareB;
  };

  return numlist.sort(compare);
}
