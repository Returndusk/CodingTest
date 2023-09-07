function solution(m, n, board) {
  board = board.map((v) => v.split(''));

  while (true) {
    let removeBlock = [];
    // 2x2  찾기
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i - 1][j] &&
          board[i][j] === board[i - 1][j - 1] &&
          board[i][j] === board[i][j - 1]
        ) {
          removeBlock.push([i, j]);
        }
      }
    }

    if (!removeBlock.length) break;

    // 블럭 없애기
    removeBlock.forEach((v) => {
      board[v[0]][v[1]] = 0;
      board[v[0] - 1][v[1]] = 0;
      board[v[0]][v[1] - 1] = 0;
      board[v[0] - 1][v[1] - 1] = 0;
    });
    // 땅기기
    for (let j = 0; j < n; j++) {
      let emptySpace = m - 1;
      for (let i = m - 1; i >= 0; i--) {
        if (board[i][j] !== 0) {
          if (i !== emptySpace) {
            board[emptySpace][j] = board[i][j];
            board[i][j] = 0;
          }
          emptySpace--;
        }
      }
    }
  }

  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) count++;
    }
  }

  return count;
}
