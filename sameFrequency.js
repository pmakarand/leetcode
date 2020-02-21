

function sameFrequency(num1, num2){
    var f1 ={};
    var f2 ={};
  //if number of digits does not match return false
    if(num1.toString().length != num2.toString().length)
     {
        return false;
     } 
    // if both numbers are equal return true
    else if (num1 === num2)
    {
        return true;
    } else // check the frequency using object
    {
        for(let ch of num1.toString())
        {    
            console.log(ch);
            if(f1[ch]) 
            {
                f1[ch]++
            } else f1[ch] = 1
            console.log(f1)
        }

        for(let ch1 of num2.toString())
        {    
            console.log("in num2: "+ch1);
            if(!f1[ch1]) 
            {
                return false;
            } else f1[ch1]--
            console.log(f1)
        }

        
    }
    return true;
}
console.log(sameFrequency(32322,23234))