// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5

//Brute Force Approach

function secondLargestNumber(arr) {
  //first create an Array with a set with all unique element
  const uniqueArray = Array.from(new Set(arr));

  //sort the array in desending order
  const sortedArray = uniqueArray.sort((a, b) => b - a);

  //finding out second hightest element
  // only return if the length is more than 2
  if (uniqueArray.length > 2) {
    return sortedArray[1];
  } else {
    return sortedArray[0];
  }
}

// console.log(secondLargestNumber([12, 35, 35, 1, 10, 34, 1]));

//Optimised Approach

function secondLargestNumberOptimised(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(secondLargestNumberOptimised([12, 35, 1, 10, 34, 1]));
