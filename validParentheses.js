/* Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid. */

var isValid = function(s) {
    // empty string
    if(s.length % 2 !== 0)
    { 
        return true;
    } 
    var st =[];
    var map = {'(':')', '[':']', '{':'}'}
    for (let ch of s)
        {
            if(map[ch])
            { 
                st.push(ch);
               // console.log(st)
            } else
            { 
                var tmp =st.pop();
               if(map[tmp] != ch)
               {
                 return false;
               }
            }
        }
    return st.length === 0;    
   // console.log (map)
    
};
console.log(isValid('(('))


// change the order and brackets and check the answer
// missing brackets
// add only one bracket
// add similar brackets 
// if length is odd size


