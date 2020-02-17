// To find if two strings are anagarms

var validAnagram = function (str1, str2)
{
var s1={};
//length of str does not match. Not anangram.
if(str1.length != str2.length) return false;
  for (let ch of str1)
    {
       if(s1[ch]) 
       {
         s1[ch]=++s1[ch];
       } else s1[ch] = 1;
    }
 for (let ch1 of str2)
 {
   if (!s1[ch1])
   {
     return false;
   } else s1[ch1] = --s1[ch1];
 }
 return true;
};

validAnagram("1122","cdaa")