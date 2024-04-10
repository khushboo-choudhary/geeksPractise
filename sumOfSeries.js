// Sum of Series

// Write a program to find the sum of the given series 1+2+3+ . . . . . .(N terms)

// Example 1:

// Input:
// N = 1
// Output: 1
// Explanation: For n = 1, sum will be 1.
// Example 2:

// Input:
// N = 5
// Output: 15
// Explanation: For n = 5, sum will be 15.
// 1 + 2 + 3 + 4 + 5 = 15.
// Your Task:
// Complete the function seriesSum() which takes single integer n, as input parameters and returns an integer denoting the answer. The result size may be large, so return a container that accommodates a 64-bit integer. You don't need to print the answer or take inputs.

// Expected Time Complexity: O(1)
// Expected Auxiliary Space: O(1)

function seriesSum(n) {
  // we cannot use for loop because time complexity is O(1)
  const bigN = BigInt(n); // using BigInt for long integer value like e.g 472996147
  const sum = (bigN * (bigN + BigInt(1))) / BigInt(2);
  return sum.toString();

  //second method
  //  return ((BigInt(n) * (BigInt(n) + BigInt(1))) / BigInt(2)).toString();
}
