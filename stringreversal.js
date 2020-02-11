// Write a javascript function named reverse which takes a string argument and returns the reversed string.

console.log(reverse("testeng"))
console.log(str_reverse("its"))

function reverse(str)
{
  var rev;
  var rev2=[];
  rev=str.split("");
  while (rev.length!=0)
  { 
   rev2.push((rev.pop()));
  }
  
  return rev2.join("");
}

// Actual solution

function str_reverse(str) {
  return str.split('').reverse().join('');
}

//Solution 3
function str_reverse2(str)
{
  let reversed ='';
    for (let character of str)
    {
     reversed = character+reversed
    }
  return reversed;
}

//Solution 4 - reduce

function str_reverse3(str)
{
   return str.split('').reduce((reversed,character)=>{return reversed=character+reversed},'')
}
 