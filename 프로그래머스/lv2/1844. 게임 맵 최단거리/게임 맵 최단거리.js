function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const queue = [[0, 0, 1]]; // x, y, 지난 칸의 수

    visited[0][0] = true;

    while (queue.length) {
        const [x, y, cnt] = queue.shift();

        if (x === n - 1 && y === m - 1) return cnt; // 도착했다면 지난 칸의 수 반환

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, cnt + 1]);
            }
        }
    }
    return -1; // 도달하지 못한 경우
}
