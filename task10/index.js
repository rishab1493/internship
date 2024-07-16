//Write a function that tries to parse a JSON string and handles any errors that occur.

function parseJson(string) {
  try {
    const value = JSON.parse(string)
    return {
      success: true,
      data: value,
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
    }
  }
}
const str1 = '{"name": "john", "age":21,}'
const result = parseJson(str1)

if (result.success) {
  console.log("Parsed data:", result.data)
} else {
  console.log("Error parsing JSON:", result.error)
}
