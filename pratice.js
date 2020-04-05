/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. */

var twoSum = function(arr, target)
{
    var obj ={}
    for (let i=0; i<arr.length; i++)
    {
        var num = target - arr[i];
        console.log(num)
        if(obj[num]!= undefined)
        {
            console.log("i is" +i)
            return([i,obj[num]])
            
        } else  
        obj[arr[i]] = i
        console.log(obj)
    }
 return false;
}

//console.log(twoSum([2, 7, 11, 15],9))

/* Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid. */

var validParentheses = function(str)
{
    var stack=[];
    if(str.length % 2 != 0)
    {
        return false;
    } else
    {
        var map = {'(':')' , '{':'}' , '[':']'}
        for(let ch of str)
        {
            if(map[ch])
            {
                stack.push(ch);
            } else if (map[stack.pop(ch)] != ch)
            {
               return false;

            }
        }

        return (stack.length === 0)
    
    }
   
}

console.log(validParentheses('[{})'))