function solution(s) {
  if (s.length % 2 !== 0) return 0;
  let count = 0;

  const check = (a) => {
    const stack = [];
    const match = {
      ')': '(',
      ']': '[',
      '}': '{',
    };

    for (let char of a) {
      if (['(', '[', '{'].includes(char)) {
        stack.push(char);
      } else if (stack.length === 0 || stack.pop() !== match[char]) {
        return false;
      }
    }
    return stack.length === 0;
  };

  const newArr = Array.from(s);

  for (let i = 0; i < s.length; i++) {
    if (check(newArr)) count++;
    const front = newArr.shift();
    newArr.push(front);
  }

  return count;
}
