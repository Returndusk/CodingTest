function solution(t, p) {
  let count = 0;

  for (i = 0; i <= t.length - p.length; i++) {
    if (parseInt(p) >= parseInt(t.substring(i, p.length + i))) count++;
  }

  return count;
}
