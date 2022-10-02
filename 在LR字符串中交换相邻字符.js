/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
// 在一个由 'L' , 'R' 和 'X' 三个字符组成的字符串（例如"RXXLRXRXL"）中进行移动操作。一次移动操作指用一个"LX"替换一个"XL"，或者用一个"XR"替换一个"RX"。
// 现给定起始字符串start和结束字符串end，请编写代码，当且仅当存在一系列移动操作使得start可以转换成end时， 返回True。

var canTransform = function(start, end) {
    // RX => XR || XL => LX
    // R的下标只会变得更大，L的下标只会变得更小
    //因此：end中的每个R相对位置都要比start中的大，每个L相对位置都要比start中的小

    let startArr = start.split("")
    let endArr = end.split("")
    let startArrNoX = startArr.filter((item) => item !== "X")
    let endArrNoX = endArr.filter((item) => item !== "X")
    if(startArrNoX.join("") !== endArrNoX.join("")) return false

    let startMap = [[],[]]
    let endMap = [[],[]]
    for(let i = 0;i<startArr.length;i++){
        if(startArr[i] === "R") startMap[0].push(i)
        else if(startArr[i] === "L") startMap[1].push(i)
    }
    for(let i = 0;i<endArr.length;i++){
        if(endArr[i] === "R") endMap[0].push(i)
        else if(endArr[i] === "L") endMap[1].push(i)
    }
    for(let i = 0;i<startMap[0].length;i++){
        if(startMap[0][i] > endMap[0][i]) return false
    }
    for(let i = 0;i<startMap[1].length;i++){
        if(startMap[1][i] < endMap[1][i]) return false
    }
    return true

};
