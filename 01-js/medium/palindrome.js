/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/
// nan Nan naN NaN 

function isPalindrome(str2) {
  let str = str2.replace(/[^a-zA-Z]/g, "");
  let n = str.length;

  for (let i = 0; i < n; i++) {
    if (str[i].toUpperCase() !== str[n - i - 1].toUpperCase()) {
      return false;
    }
  }
  return true;
}



module.exports = isPalindrome;
