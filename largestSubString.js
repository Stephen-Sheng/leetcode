function largerstSubString(str1,str2){

    let maxLen = 0
    let maxIndex = 0
    let arr = new Array(str1.length+1).fill(0).map(item => item = new Array(str2.length+1).fill(0))

    for(let i = 1; i<str1.length+1;i++){
        for(let j = 1; j< str2.length+1;j++){
            if(str1[i-1] === str2[j-1]){
                arr[i][j] = arr[i-1][j-1] + 1
                if(arr[i][j] > maxLen){
                    maxLen = arr[i][j]
                    maxIndex = i-1
                }
            }
        }
    }
    console.log(maxIndex,maxLen)
    return str1.substring(maxIndex - maxLen+1,maxIndex+1)
}
