// Missing number in array.
// Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.
// Example 1:

// Input:
// N = 5
// A[] = {1,2,3,5}
// Output: 4
// Example 2:

// Input:
// N = 10
// A[] = {6,1,2,8,3,4,7,10,5}
// Output: 9

// Your Task :
// You don't need to read input or print anything. Complete the function MissingNumber() that takes array and N as input  parameters and returns the value of the missing number.

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)

function missingNumber(A, n) {
  let sum = (n * (n + 1)) / 2;
  for (let i of A) sum -= i; //it will give arr[i] value in i for of loop having this rule
  // like i = 1,i = 2, i = 4,i = 5
  return sum;
}

console.log(missingNumber([1, 2, 4, 5], 5));

// function MissingNumber(array, n) {
//   //code here
//   let formula = (n * (n + 1)) / 2;
//   let missing = 0;
//   for (let i = 0; i < array.length; i++) {
//     missing += array[i];
//   }
//   return formula - missing;
// }

// let n = 5;
// let array = [1, 2, 3, 5];
console.log(MissingNumber(array, n));
