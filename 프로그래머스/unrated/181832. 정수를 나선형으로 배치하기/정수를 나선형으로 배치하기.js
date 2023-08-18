function solution(n) {
  const arr = [...Array(n)].map(() => Array(n).fill(0));
  let num = 1;

  let up = 0;
  let down = n - 1;
  let left = 0;
  let right = n - 1;

  while (num <= n * n) {
    for (let i = left; i <= right; i++) {
      arr[up][i] = num++;
    }
    up++;

    for (let i = up; i <= down; i++) {
      arr[i][right] = num++;
    }
    right--;

    for (let i = right; i >= left; i--) {
      arr[down][i] = num++;
    }
    down--;

    for (let i = down; i >= up; i--) {
      arr[i][left] = num++;
    }
    left++;
  }
  return arr;
}
