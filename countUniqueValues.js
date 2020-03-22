/* count unique values in an array
Ex: [1,1,2,2,3,4] = 3 */

var countUniqueVal = function(arr)
{   
    var i = 0;
    
    var counter = 0;
    //if array is empty
    if (!arr) {return 0}
    // if only one element in array
    if (arr.length == 1) {return 1}
    
    for (let j=1; j<arr.length; j++)
    {
        if(arr[i] != arr[j])
         {
             i++;   
             arr[i] = arr[j];
             console.log ("i is "+ i + " j is "+ j)
         } 
     
    }
    
    return i+1;
}


console.log (countUniqueVal([1,2,3,3,4,4,5,5,6]))