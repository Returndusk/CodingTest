function solution(people, limit) {
  people.sort((a, b) => b - a);
  let count = 0;
  let left = count;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) right--;
    left++;
    count++;
  }

  return count;
}
