//Write a function that removes duplicates from an array.
function removeDuplicates(arr) {
  array1 = []

  for (let i = 0; i < arr.length; i++) {
    if (!array1.includes(arr[i])) {
      array1.push(arr[i])
    }
  }
  return array1
}

const array2 = [1, 1, 1, 1, 3, 3, 3, 6, 6, 6, 6, 4, 3, 9, 10, 10, 10, 10]
console.log(removeDuplicates(array2))
