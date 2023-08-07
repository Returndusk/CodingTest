function solution(n) {
  let array = [0, 1];
  for (i = 2; i <= n; i++) {
    array.push((array[i - 2] + array[i - 1]) % 1234567);
  }
  return array[n];
}
