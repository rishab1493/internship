//Write a function that takes a string as an argument and returns the reverse of the string.

function reverse(str) {
  const newString = str.split("").reverse().join("")
  return newString
}

console.log(reverse("string"))
