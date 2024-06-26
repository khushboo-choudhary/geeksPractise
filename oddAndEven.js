// Odd or Even

// Given a positive integer N, determine whether it is odd or even.
// school level points:0;
// Example 1:

// Input:
// N = 1
// Output:
// odd
// Explanation:
// The output is self-explanatory.

// Example 2:

// Input:
// N = 2
// Output:
// even
// Explanation:
// The output is self-explanatory.

// Your Task:

// You don't need to read input or print anything. Your task is to complete the function oddEven() which takes the integer N and return "even" is number is even and "odd" if the number is odd.

// Expected Time Complexity: O(1)
// Expected Auxiliary Space: O(1)

function oddEven(N) {
  return N % 2 === 0 ? "even" : "odd";
}

console.log(oddEven(1)); //Output: odd
