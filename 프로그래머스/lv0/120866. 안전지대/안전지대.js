function solution(board) {
    const outside = [[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0] ,[1,-1],[0,-1]];
  
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
            for (let k = 0; k < outside.length; k++) {
                let [x, y] = outside[k];
                let nx = i + x;
                let ny = j + y;
                if (nx >= 0 &&
                    nx < board.length &&
                    ny >= 0 &&
                    ny < board[i].length &&
                    board[nx][ny] !== 1) {
                        board[nx][ny] = 2;
                    }
                }
            } 
        }
    }
    // console.log(board)
  
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 2) {
            board[i][j] = 1;
            }
        }
    }
    
    // console.log(board)
    
    return board.reduce((acc, cur) => acc.concat(cur), []).filter(x => x === 0).length;
  }
  