/* You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
Each character in S is a type of stone you have.  
You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3

Example 2:
Input: J = "z", S = "ZZ"
Output: 0 */

var numJewelsInStones = function(J, S) {
  
    
    const iterator= J.split('');
    var counter=0;
    console.log(iterator)
    if (!J || !S) return 0;
    
    function isJewel(curr_val)
    { 
      for (const value of iterator)
         {
           
           if (value == curr_val)
              {
                
                  counter = counter+1
                  console.log(counter)
              }     
         }
        return counter;
     }
  
    S.split('').forEach(isJewel)
  
    return counter;
 
};

//Ideal solution
/*
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones2 = function(J, S) {
    if (!J || !S) return 0;
    
    let count = 0;
    for (const c of S) {
        if (J.includes(c)) count++;
    }
    
    return count;
};

console.log(numJewelsInStones2('aA','aAAAAbbbb'))