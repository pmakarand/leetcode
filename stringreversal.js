reverse("log")
function reverse(str)
{
  var rev;
  var rev2=[];
  rev=str.split("");
  while (rev.length!=0)
  { 
   rev2.push((rev.pop()));
  }
  console.log(rev2.join(""));
  return rev2.join("");
  
}
 