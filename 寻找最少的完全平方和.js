
function processSquare(n){
    let max = 0
    for(let i = 1;i<=n;i++){
        const temp = i * i
        if(temp <= n && temp > max * max){
            max = i
        }
    }
    let path = []
    let result = Infinity
    let sum = 0
    backTracking()
    return result
    function backTracking(){
        if(sum > n) return
        if(sum === n){
            result = result < path.length ? result : path.length
            return
        }
        for(let i = max;i>=1;i--){
            if(path.length >= result) continue
            const val = i * i
            path.push(val)
            sum += val
            backTracking()
            sum -= val
            path.pop()
        }
    }
}
console.log(processSquare(13))
