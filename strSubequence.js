/* identify the subsequence in the the other str */
var isSubsequence = function(str1, str2)
{
    var j=0;
    console.log(str1+" ----- "+str2)
    //if str1 = str2
     if(str1 === str2)
     {
         return true
     } else
    //if str1.length < str2.length
    if(str1.length > str2.length)
    {
        return false;
    } else
     {
         for (let i=0; i<str2.length; i++)
         {
             if(str1.charAt(j) === str2.charAt(i))
             {
                j++;
             }
             if(str1.length === j)
             {
                 return true;
             }
         }

     }
return false;
     
}

console.log(isSubsequence("hello","world hello"))



