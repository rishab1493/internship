//Write a function that takes an array of numbers and returns the largest number in the array.
function largestNumber(arr) {
  let max = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}
const array1 = [3, 1, 6, 500, 4, 8, 2, 100, 44, 5]
console.log(largestNumber(array1))
