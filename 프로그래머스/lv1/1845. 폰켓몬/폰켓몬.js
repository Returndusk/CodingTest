function solution(nums) {
  let newNum = new Set(nums);
  return nums.length / 2 > newNum.size ? newNum.size : nums.length / 2;
}
