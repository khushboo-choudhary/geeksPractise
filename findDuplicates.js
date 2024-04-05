// Find duplicates in an array

// Given an array a of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the given array. Return the answer in ascending order. If no such element is found, return list containing [-1].

// Note: The extra space is only for the array to be returned. Try and perform all operations within the provided array.

// Example 1:

// Input:
// N = 4
// a[] = {0,3,1,2}
// Output:
// -1
// Explanation:
// There is no repeating element in the array. Therefore output is -1.
// Example 2:

// Input:
// N = 5
// a[] = {2,3,1,2,3}
// Output:
// 2 3
// Explanation:
// 2 and 3 occur more than once in the given array.
// Your Task:
// Complete the function duplicates() which takes array a[] and n as input as parameters and returns a list of elements that occur more than once in the given array in a sorted manner.

// Expected Time Complexity: O(n).
// Expected Auxiliary Space: O(n).

function duplicates(a, n) {
  //your code here
  // return typeof(a[0])
  var obj = {};

  for (let i = 0; i < n; i++) {
    if (obj[a[i]] == undefined) {
      obj[a[i]] = 1;
    } else {
      obj[a[i]] += 1;
    }
  }

  var res = [];
  for (let key in obj) {
    if (obj[key] > 1) {
      res.push(key);
    }
  }
  return res;
}

let a = [2, 3, 1, 2, 3];
let n = 5;
console.log(duplicates(a, n));
