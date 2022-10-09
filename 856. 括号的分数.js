// 给定一个平衡括号字符串 S，按下述规则计算该字符串的分数：

// () 得 1 分。
// AB 得 A + B 分，其中 A 和 B 是平衡括号字符串。
// (A) 得 2 * A 分，其中 A 是平衡括号字符串。
// 输入： "()"
// 输出： 1
// 示例 2：

// 输入： "(())"
// 输出： 2
// 示例 3：

// 输入： "()()"
// 输出： 2
// 示例 4：

// 输入： "(()(()))"
// 输出： 6

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {

    let stack = [0]
    for(let item of s){
        if(item === '('){
            stack.push(0)
        }else{
            const value = stack.pop()
            const temp = value === 0 ? 1 : 2 * value
            const res = stack.pop() + temp
            stack.push(res)
        }
    }
    return stack.pop()

};
