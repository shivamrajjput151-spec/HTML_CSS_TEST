
// Q1 Find the first character that appears only once in a string.

// Input 1:
// "swiss"
// *Output 1:
// "w"
// *Input 2:
// "aabbcde"
// *Output 2:
// "c"


function findFirstNonRepeating(str) {
  let countMap = {};
  for (let i = 0; i < str.length; i++) {
    if (countMap[str[i]] == undefined) {
      countMap[str[i]] = 1;
    } else {
      countMap[str[i]] += 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (countMap[str[i]] == 1) {
      return str[i];
    }
  }
  return -1;
}

const output1 = findFirstNonRepeating("swiss");
console.log(output1, "output1");
const output2 = findFirstNonRepeating("aabbcde");
console.log(output2, "output2");


// Q2 Longest Substring Without Repeating Characters

// Question: Find the length of the longest substring that contains no duplicate characters.

// Input 1:
// "abcabcbb"
// Output 1:
// 3
// Input 2:
// "bbbbb"
// Output 2:
// 1

function longestSubstring(str) {
  let maxLen = 0;
  let startIdx = 0;
  let chars = {};

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    
    if (chars[currentChar] !== undefined && chars[currentChar] >= startIdx) {
      startIdx = chars[currentChar] + 1;
    }
    
    chars[currentChar] = i;
    let len = i - startIdx + 1;
    
    if (len > maxLen) {
      maxLen = len;
    }
  }
  
  return maxLen;
}

console.log(longestSubstring("abcabcbb"), "output1");
console.log(longestSubstring("bbbbb"), "output2");

// Q3 Two Sum

// Question: Find two numbers in an array whose sum equals the given target.

// Input 1:
// arr = [2, 7, 11, 15]
// target = 9
// Output 1:
// [2, 7]
// Input 2:
// arr = [3, 2, 4]
// target = 6
// Output 2:
// [2, 4]

function twoSum(arr, target) {
  let map = {};
  
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    
    if (map[complement] !== undefined) {
      return [complement, arr[i]];
    }
    
    map[arr[i]] = true;
  }
  
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9), "output1");
console.log(twoSum([3, 2, 4], 6), "output2");


// ### 4. Find the Second Largest Number

// Question: Find the second largest element without using sort().

// Input 1:
// [10, 5, 8, 20, 15]
// Output 1:
// 15
// Input 2:
// [4, 1, 9, 7, 6]
// Output 2:
// 7

function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(findSecondLargest([10, 5, 8, 20, 15]), "output1");
console.log(findSecondLargest([4, 1, 9, 7, 6]), "output2");


// ### 5. Remove Duplicates Without Using Set

// Question: Remove duplicate values from an array without using Set.

// Input 1:
// [1, 2, 2, 3, 4, 4, 5]
// Output 1:
// [1, 2, 3, 4, 5]
// Input 2:
// [10, 20, 10, 30, 20, 40]
// Output 2:
// [10, 20, 30, 40]

function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) == -1) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]), "output1");
console.log(removeDuplicates([10, 20, 10, 30, 20, 40]), "output2");


// ### 6. Check Whether Two Strings Are Anagrams

// Question: Check whether two strings contain the same characters with the same frequency.

// Input 1:
// "listen"
// "silent"
// Output 1:
// true
// Input 2:
// "hello"
// "world"
// Output 2:
// false

function checkAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  let countMap = {};

  for (let i = 0; i < str1.length; i++) {
    if (countMap[str1[i]] == undefined) {
      countMap[str1[i]] = 1;
    } else {
      countMap[str1[i]] += 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (countMap[str2[i]] == undefined) {
      return false;
    } else {
      countMap[str2[i]] -= 1;
    }
  }

  for (let key in countMap) {
    if (countMap[key] != 0) {
      return false;
    }
  }

  return true;
}

console.log(checkAnagram("listen", "silent"), "output1");
console.log(checkAnagram("hello", "world"), "output2");

// Q7 Maximum Subarray Sum

// Question: Find the maximum possible sum of a contiguous subarray.

// Input 1:
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output 1:
// 6
// Input 2:
// [5, 4, -1, 7, 8]
// Output 2:
// 23

function maxSubarraySum(arr) {
  let maxSum = arr[0];
  let currSum = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];
    
    if (currSum + num > num) {
      currSum = currSum + num;
    } else {
      currSum = num;
    }
    
    if (currSum > maxSum) {
      maxSum = currSum;
    }
  }
  
  return maxSum;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]), "output1");
console.log(maxSubarraySum([5, 4, -1, 7, 8]), "output2");


// ### 8. Move All Zeros to the End

// Question: Move all `0`s to the end of the array while maintaining the order of the other elements.
// Input 1:
// [0, 1, 0, 3, 12]
// Output 1:
// [1, 3, 12, 0, 0]
// Input 2:
// [1, 0, 2, 0, 4, 5]
// Output 2:
// [1, 2, 4, 5, 0, 0]




function moveZeros(arr) {
  let result = [];
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      zeroCount++;
    } else {
      result.push(arr[i]);
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }

  return result;
}

console.log(moveZeros([0, 1, 0, 3, 12]), "output1");
console.log(moveZeros([1, 0, 2, 0, 4, 5]), "output2");
// ### 9. Find the Missing Number

// Question: An array contains numbers from 1 to n, but one number is missing. Find the missing number.

// Input 1:
// [1, 2, 4, 5, 6]
// Output 1:
// 3
// Input 2:
// [1, 2, 3, 5]
// Output 2:
// 4

function findMissingNumber(arr) {
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6]), "output1");
console.log(findMissingNumber([1, 2, 3, 5]), "output2");


// ### 10. Find Frequency of Each Element

// Question:Count how many times each element appears in an array.
// Input 1:
// [1, 2, 2, 3, 1, 1]
// Output 1:
// { 1: 3, 2: 2, 3: 1 }
// Input 2:
// ["a", "b", "a", "c", "b", "a"]
// Output 2:
// { a: 3, b: 2, c: 1 }

function findFrequency(arr) {
  let countMap = {};

  for (let i = 0; i < arr.length; i++) {
    if (countMap[arr[i]] == undefined) {
      countMap[arr[i]] = 1;
    } else {
      countMap[arr[i]] += 1;
    }
  }

  return countMap;
}

console.log(findFrequency([1, 2, 2, 3, 1, 1]), "output1");
console.log(findFrequency(["a", "b", "a", "c", "b", "a"]), "output2");