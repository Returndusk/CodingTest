function solution(my_string) {
  let newStr = '';

  for (const char of my_string) {
    if (!newStr.includes(char)) {
      newStr += char;
    }
  }

  return newStr;
}
