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
          tmp =~~(tmp/10);
        }
        if (num === x)
        {
            return true;
        } else return false;
        
       } 
          
     
};
isPalindrome(34563)
//solution 2
// var isPalindrome = function(x) {
//   return String(x) === String(x).split('').reverse().join('')
// }