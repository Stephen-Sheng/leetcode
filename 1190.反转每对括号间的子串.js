// 给出一个字符串 s（仅含有小写英文字母和括号）。

// 请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。

// 注意，您的结果中 不应 包含任何括号。

 

// 示例 1：

// 输入：s = "(abcd)"
// 输出："dcba"
// 示例 2：

// 输入：s = "(u(love)i)"
// 输出："iloveu"
// 解释：先反转子字符串 "love" ，然后反转整个字符串。
// 示例 3：

// 输入：s = "(ed(et(oc))el)"
// 输出："leetcode"
// 解释：先反转子字符串 "oc" ，接着反转 "etco" ，然后反转整个字符串。
// 示例 4：

// 输入：s = "a(bcdefghijkl(mno)p)q"
// 输出："apmnolkjihgfedcbq"


/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    
    let stack = []
    let str = ""
    for(let ch of s){
        if(ch === "("){
            stack.push(str)
            str = ""
        }else if(ch === ")"){
            str = str.split("").reverse().join("")
            str = stack.pop() + str;
        }else{
            str += ch
        }
    }
    return str
};
