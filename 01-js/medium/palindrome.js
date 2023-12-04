/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/
// nan Nan naN NaN 
function isAlpha(char){
  if((char>='a' && char<='z') || (char>='A' && char<='Z')){
      return true;
  }
  return false;
}

function isPalindrome(str) {
  let n=str.length;
  for(let i=0; i<n; i++){
    if(!isAlpha(str[n-i-1])) continue;
    if(!isAlpha(str[i])) continue;
    if(str[i].toUpperCase()!==str[n-i-1].toUpperCase() || str[i]!==str[n-i-1]){
      return false;
    }
    
  }
  return true;
}



module.exports = isPalindrome;
