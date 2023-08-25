function solution(arr) {
  let answer = 1;
  let newArray = [];

  for (let i of arr) {
    let num = i;
    let divisor = 2;

    while (num > 1) {
      let count = 0;

      while (num % divisor === 0) {
        count++;
        num /= divisor;
      }

      if (count > 0) {
        if (!newArray[divisor] || count > newArray[divisor])
          newArray[divisor] = count;
      }

      divisor++;
    }
  }

  for (let i in newArray) {
    answer *= Math.pow(parseInt(i), newArray[i]);
  }

  return answer;
}
