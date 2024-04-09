// Reverse a String

// You are given a string s. You need to reverse the string.

// Example 1:

// Input:
// s = Geeks
// Output: skeeG
// Example 2:

// Input:
// s = for
// Output: rof
// Your Task:

// You only need to complete the function reverseWord() that takes s as parameter and returns the reversed string.

// Expected Time Complexity: O(|S|).
// Expected Auxiliary Space: O(1).

function reverseWord(str) {
  //Your code here
  var res = "";
  for (var i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

console.log(reverseWord("Geeks")); // "skeeG"
