// 给定一组 n 人（编号为 1, 2, ..., n）， 我们想把每个人分进任意大小的两组。每个人都可能不喜欢其他人，那么他们不应该属于同一组。
// 给定整数 n 和数组 dislikes ，其中 dislikes[i] = [ai, bi] ，表示不允许将编号为 ai 和  bi的人归入同一组。当可以用这种方法将所有人分进两组时，返回 true；否则返回 false。
// 示例 1：
// 输入：n = 4, dislikes = [[1,2],[1,3],[2,4]]
// 输出：true
// 解释：group1 [1,4], group2 [2,3]
// 示例 2：
// 输入：n = 3, dislikes = [[1,2],[1,3],[2,3]]
// 输出：false
// 示例 3：
// 输入：n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
// 输出：false


/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {

    let color = new Array(n+1).fill(false)
    let visited = new Array(n+1).fill(false)
    let flag = true
    const graph = buildGraph(n,dislikes)
    for(let i = 1;i<=n;i++){
        if(!visited[i]) traverse(i)
    }
    return flag
    function buildGraph(n,dislikes){
        let graph = new Array(n+1).fill(0).map((item) => item = new Array())
        for(let [g,v] of dislikes){
            graph[g].push(v)
            graph[v].push(g)
        }
        return graph
    }
    function traverse(node){
        if(!flag) return
        visited[node] = true
        for(let item of graph[node]){
            if(!visited[item]){
                color[item] = !color[node]
                traverse(item)
            }else{
                if(color[item] === color[node]) flag = false
            }
        }
    }

};
