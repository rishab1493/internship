//Write a program that determines whether a given year is a leap year.

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year")
  } else {
    console.log(year + " is not a leap year")
  }
}

leapYear(1600)
