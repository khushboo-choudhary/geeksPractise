// Given an array Arr of size N, print the second largest distinct element from an array. If the second largest element doesn't exist then return -1.

// Example 1:

// Input:
// N = 6
// Arr[] = {12, 35, 1, 10, 34, 1}
// Output: 34
// Explanation: The largest element of the
// array is 35 and the second largest element
// is 34.

function secondMaximum(N, arr) {
  var secondMax = -1;
  var max = arr[0];
  for (var i = 0; i < n; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}

let N = 6;
let arr = [12, 35, 1, 10, 34, 1];

console.log(secondMaximum(N, arr));

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)
