function solution(s, n) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (upper.includes(char)) {
      const index = (upper.indexOf(char) + n) % 26;
      result += upper[index];
    } else if (lower.includes(char)) {
      const index = (lower.indexOf(char) + n) % 26;
      result += lower[index];
    } else {
      result += ' ';
    }
  }

  return result;
}
