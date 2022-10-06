var threeEqualParts = function(arr) {
    let sum = arr.reduce((a,b) => a+b)
    if(sum % 3) return [-1,-1]
    if(sum === 0) return [0,2]

    const partial = sum / 3
    let first
    let second
    let third
    let cur = 0
    for(let i = 0;i<arr.length;i++){
        if(arr[i] === 1){
            if(cur === 0){
                first = i
            }else if(cur === partial){
                second = i
            }else if(cur === 2 * partial){
                third = i
            }
            cur++
        }
    }
    let len = arr.length - third
    if(first + len <= second && second + len <= third){
        let i = 0
        while(third + i < arr.length){

            if(arr[first+i] === arr[second+i] && arr[first+i] === arr[third+i]) i++
            else return [-1,-1]
        }
        return [first+len-1,second+len]
    }
    return [-1,-1]
};
