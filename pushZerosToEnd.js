// Move all zeroes to end of array

// Given an array arr[] of n positive integers. Push all the zeros of the given array to the right end of the array while maintaining the order of non-zero elements. Do the mentioned change in the array in-place.

// Example 1:

// Input:
// N = 5
// Arr[] = {3, 5, 0, 0, 4}
// Output: 3 5 4 0 0
// Explanation: The non-zero elements
// preserve their order while the 0
// elements are moved to the right.
// Example 2:

// Input:
// N = 4
// Arr[] = {0, 0, 0, 4}
// Output: 4 0 0 0
// Explanation: 4 is the only non-zero
// element and it gets moved to the left.
// Your Task:
// You don't need to read input or print anything. Complete the function pushZerosToEnd() which takes the array arr[] and its size n as input parameters and modifies arr[] in-place such that all the zeroes are moved to the right.

// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

function pushZerosToEnd(arr, n) {
  var count = 0;
  for (var i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }
  while (count < n) {
    arr[count] = 0;
    count++;
  }
  return arr;
}

let arr = [1, 2, 0, 0, 4];
let n = 5;
console.log(pushZerosToEnd(arr, n));
