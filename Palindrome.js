function isPalindrome(x) {
let reverseX = x.split('').reverse().join('');
  let lowerX = x.toLowerCase();
  let lowerReverseX = reverseX.toLowerCase();
  if (lowerX === lowerReverseX){
    return true} 
      return false
    
}
