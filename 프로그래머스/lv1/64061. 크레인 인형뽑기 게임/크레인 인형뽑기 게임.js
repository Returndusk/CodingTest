function solution(board, moves) {
  moves = moves.map((x) => x - 1);
  let stack = [];
  let cnt = 0;

  for (let move of moves) {
    let i = 0;
    while (i !== board.length) {
      if (board[i][move] !== 0) {
        stack.push(board[i][move]);
        board[i][move] = 0;
        break;
      } else {
        i += 1;
      }
    }

    if (stack.length < 2) {
      continue;
    } else if (stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
      cnt += 2;
    }
  }

  return cnt;
}
