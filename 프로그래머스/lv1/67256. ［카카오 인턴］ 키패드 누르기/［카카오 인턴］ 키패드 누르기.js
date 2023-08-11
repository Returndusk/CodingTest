function solution(numbers, hand) {
  let answer = '';
  const keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
  };

  let left = [3, 0]; // * 위치
  let right = [3, 2]; // # 위치

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      answer += 'L';
      left = keyPad[numbers[i]];
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      answer += 'R';
      right = keyPad[numbers[i]];
    } else {
      let target = keyPad[numbers[i]];

      let leftDistance =
        Math.abs(left[0] - target[0]) + Math.abs(left[1] - target[1]);
      let rightDistance =
        Math.abs(right[0] - target[0]) + Math.abs(right[1] - target[1]);

      if (
        leftDistance < rightDistance ||
        (leftDistance === rightDistance && hand === 'left')
      ) {
        answer += 'L';
        left = keyPad[numbers[i]];
      } else {
        answer += 'R';
        right = keyPad[numbers[i]];
      }
    }
  }

  return answer;
}
