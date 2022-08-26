function isPalindrome(word) {
  // iterate from the beginning to the middle;
   for(let i = 0; i < word.length/2; i++){
      //check each letter to the corresponding letter from the end
      const j = word.length-1 - i
      //if any letters don't match, return false.
      if(word[i] !== word[j]) return false

   }
  //return true if the letters match
  return true

}

/* 

r a c e c a r
0 1 2 3 4 5 6
i           j

r a c e c a r
0 1 2 3 4 5 6
  i       j

r a c e c a r
0 1 2 3 4 5 6
    i   j

r a c e c a r
0 1 2 3 4 5 6
      ij




  Add your pseudocode here

  If the first letter is the same as the last letter 
  and the second letter is the same as to the second last letter etc, 
  till we get to the middle, return true.

  iterate from the beginning to the middle;
  check each letter to the corresponding letter from the end
  if any letters don't match, return false.

  return true


*/

/*
 
  // written explanation of your solution here//
  This is a function that returns true if the word is a palindrome. That means if the first letter
  is the same as the last letter and the second letter is the same as to the second last letter etc, till we get
  to the middle, return true.

//Test cases
 abba
 ^  ^
  ^^
  should return true;

robot
^   ^
 ^ ^
  ^
  should return false;  


*/ 

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robotrobots"));

console.log("");

console.log("Expecting: true");
console.log("=>", isPalindrome("abba"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("abbaabbas"));
}


module.exports = isPalindrome;
