/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. */



/* *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * */

 // Brute force approach

var twoSum = function(nums, target) {
    var arr=[];
    
    for (let i=0; i<nums.length; i++)
        {
          for (let j=i+1; j<nums.length; j++)
        {
            if (nums[i]+nums[j] === target)
                {
                  arr.push(i,j);
             
                }        
          }    
        }
    return arr;   
};


// This optimized solution with Map

var twoSum = function(nums, target) {
    let myMap = new Map();
    myMap.set(nums[0], 0);
    console.log(myMap)
    for(let i=1;i<nums.length;i++){
        let diff = target-nums[i];
            console.log(diff)
        if(myMap.has(diff)) {
            console.log(myMap)
            return [myMap.get(diff), i];
        } else {
            console.log(myMap)
            myMap.set(nums[i], i);
        }
    }
}
twoSum([3,4,2], 6)