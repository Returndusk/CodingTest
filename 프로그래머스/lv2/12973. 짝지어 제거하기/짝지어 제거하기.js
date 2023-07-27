function solution(s) {
  let newArray = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === newArray[newArray.length - 1]) {
      newArray.pop();
    } else {
      newArray.push(s[i]);
    }
  }

  return newArray.length === 0 ? 1 : 0;
}
