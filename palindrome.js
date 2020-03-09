//to verify palindrome

var isPalindrome = function(x) {
    var tmp;
    var num;
    var restNum;
    if(x<0)
    {
      return false;
    }
    else if(x<10)
    {
      return true;
    }
    else 
       {
         num = 0;
         tmp = x;
        while (tmp !== 0)
        {
          num =((num*10)+(tmp%10))
          console.log(tmp%10)
          tmp = Math.floor(tmp/10);
          // use bit wise operator ~~ instead math.floor
          console.log(tmp);
        }
        if (num === x)
        {
            return true;
        } else return false;
        
       } 
          
     
};
console.log(isPalindrome(34543))
//solution 2
// var isPalindrome = function(x) {
//   return String(x) === String(x).split('').reverse().join('')
// }