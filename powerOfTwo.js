//  Power of 2

//  Given a non-negative integer N. The task is to check if N is a power of 2. More formally, check if N can be expressed as 2x for some integer x. Return true if N is power of 2 else return false.

// Example 1:

// Input:
// N = 8
// Output:
// YES
// Explanation:
// 8 is equal to 2 raised to 3 (23 = 8).
// Example 2:

// Input:
// N = 98
// Output:
// NO
// Explanation:
// 98 cannot be obtained by any power of 2.
// Your Task:Your task is to complete the function isPowerofTwo() which takes n as a parameter and returns true or false by checking if the given number can be represented as a power of two or not.

// Expected Time Complexity:O(log N).
// Expected Auxiliary Space:O(1).

function isPowerOfTwo(N) {
  if (N <= 0) return false; // 0 and negative numbers are not powers of 2

  // Keep dividing N by 2 until it becomes 1 or an odd number
  while (N > 1 && N % 2 == 0) {
    // If N is not divisible by 2, it's not a power of 2
    N /= 2; //N=N/2;  ->It repeatedly divides the number N by 2 until it becomes 1 or an odd number O(log N).
  }
  return N == 1 ? true : false; // If N becomes 1, it's a power of 2. Otherwise, it's not.
}

console.log(isPowerOfTwo(8)); //Expecting output:true
