function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let triple = nums[i] + nums[j] + nums[k];
        let prime = true;

        if (triple < 2) {
          prime = false;
        } else {
          for (let p = 2; p * p <= triple; p++) {
            if (triple % p === 0) {
              prime = false;
              break;
            }
          }
        }
        if (prime) {
          answer++;
        }
      }
    }
  }

  return answer;
}
