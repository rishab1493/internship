//Write a function that tries to parse a JSON string and handles any errors that occur.

function parseJson(string) {
  try {
    const value = JSON.parse(string)
    return value
  } catch (error) {
    return error
  }
}
const str1 = '{"name": "john", "age":21}'
console.log(parseJson(str1))
