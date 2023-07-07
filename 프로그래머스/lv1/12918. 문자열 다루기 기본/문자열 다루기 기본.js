function solution(s) {
  const length = s.length;
  
  if (length === 4 || length === 6) {
      for (let i = 0; i < length; i++) {
          if (isNaN(s[i])) {
              return false;
          }
      }
      return true;
  }
  
  return false;
}