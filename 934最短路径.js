/**
 * 给你一个大小为 n x n 的二元矩阵 grid ，其中 1 表示陆地，0 表示水域。
岛是由四面相连的 1 形成的一个最大组，即不会与非组内的任何其他 1 相连。grid 中 恰好存在两座岛 。
你可以将任意数量的 0 变为 1 ，以使两座岛连接起来，变成 一座岛 。
返回必须翻转的 0 的最小数目。
示例 1：

输入：grid = [[0,1],[1,0]]
输出：1
示例 2：

输入：grid = [[0,1,0],[0,0,0],[0,0,1]]
输出：2
示例 3：

输入：grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
输出：1
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
 function shortestBridge(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    // 方向数组
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    const queue = [];
    const dfs = (i, j) => {
      // 1代表陆地  岛是由四面相连的 1 形成的一个最大组
      if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== 1) return;
      // 标记小岛2
      grid[i][j] = 2;
      // 初始化queue（记录小岛2的坐标）
      queue.push([i, j]);
      for (let [x, y] of directions) {
        dfs(i + x, j + y);
      }
    };
    const bfs = () => {
      let step = 0;
      while (queue.length) {
        let size = queue.length;
        step++;
        while (size--) {
          const [i, j] = queue.shift();
          // 出队列向四周扩散
          for (let [x, y] of directions) {
            const newI = i + x;
            const newJ = j + y;
            if (newI >= 0 && newI < rows && newJ >= 0 && newJ < cols) {
              // 找到小岛1，直接返回
              // 找到空白，继续前进搜寻
              if (grid[newI][newJ] === 1) {
                return step - 1;
              } else if (grid[newI][newJ] === 0) {
                // 先把它融入小岛1中避免重复访问到
                grid[newI][newJ] = 2;
                queue.push([newI, newJ]);
              }
            }
          }
        }
      }
    };
    // 标记小岛2 之所以用dfs是需要把当前岛上所有的陆地都遍历到并且加入队列
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // 从任一一个陆地节点出发去找到它所在的岛屿，
        if (grid[i][j] === 1) {
          dfs(i, j);
          return bfs();
        }
      }
    }
    return -1;
  }
