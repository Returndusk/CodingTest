function solution(N, stages) {
  stages.sort((a, b) => a - b);

  let failPer = [];
  let player = stages.length;
  let index = 0;

  for (let i = 1; i <= N; i++) {
    let count = 0;

    while (stages[index] === i) {
      count++;
      index++;
    }

    let failRate = count === 0 ? 0 : count / player;
    failPer.push([i, failRate]);

    player -= count;
  }

  failPer.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });

  return failPer.map((v) => v[0]);
}
