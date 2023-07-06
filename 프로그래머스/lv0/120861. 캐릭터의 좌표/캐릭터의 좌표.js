function solution(keyinput, board) {
  let x = 0;
  let y = 0;
  let maxX = Math.floor(board[0] / 2);
  let maxY = Math.floor(board[1] / 2);

  for (let key of keyinput) {
    switch (key) {
      case 'left':
        if (x > -maxX) x--;
        break;
      case 'right':
        if (x < maxX) x++;
        break;
      case 'up':
        if (y < maxY) y++;
        break;
      case 'down':
        if (y > -maxY) y--;
        break;
    }
  }

  return [x, y];
}