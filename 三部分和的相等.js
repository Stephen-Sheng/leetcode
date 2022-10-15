// 给定一个数组, 从中选择两个元素, 使这两个元素将数据划分为三部分, 每一部分的和相等
// 找出这两个元素的下标并输出, 没有则返回-1

// case: [3, 2, 3, 5, 7, 1, 4]
// 输出: 2, 4; 选取下标2和4的元素, 将数组划分为[3, 2], [5], [1, 4], 和相等


function threePartSum(arr){
    let frontNum = new Array(arr.length).fill(0)
    let endNum = new Array(arr.length).fill(0)
    for(let i = 1;i<arr.length;i++){
        let count = 0
        for(let j = 0;j<i;j++){
            count += arr[j]
        }
        frontNum[i] = count
    }
    for(let i = 0;i<arr.length-1;i++){
        let count = 0
        for(let j = i+1;j<arr.length;j++){
            count += arr[j]
        }
        endNum[i] = count
    }
    let left = 1
    let right = arr.length-2
    while(left<right){
        let part1 = frontNum[left]
        let part2 = endNum[right]
        let mid = endNum[left] - endNum[right] - arr[right]
        if(part1 === part2 && part1 === mid) return [left,right]
        left++
        right--
    }
    return -1
}
console.log(threePartSum([3, 2, 3, 5, 7, 1, 4]));
