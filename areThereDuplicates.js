
//frequency Counter Pattern
function areThereDuplicates(arr) {
  // good luck. (supply any arguments you deem necessary.)
   var s1={};
   for(let i of arr)
   { 
       if(s1[i])
       {
           s1[i]++
           // if s1[i] > 1 means duplicate
           if(s1[i] > 1)
           {
               return true
           }
           
       } else s1[i] = 1
       
   }
 return false;

}

//multiple counter pattern

function areThereDuplicates1(arr) {
    // good luck. (supply any arguments you deem necessary.)
     var i=0;
     var temp;
     arr.sort();
     console.log(arr)
    for (let j=1 ;j<arr.length; j++)
    {   
        console.log(arr[i], arr[j])
        if(arr[i] === arr[j])
        {
            return true;
        } else i++

    }
    return false;
  }
  

console.log(areThereDuplicates1([1,2,3,1,54]))