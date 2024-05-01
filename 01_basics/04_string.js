const name = "Sudheer";
console.log(name)

const gameName = new String('hiteshhhc')

//string methods
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))

console.log(gameName.indexOf('i'))

//substring it take out the text from between the range
const newString = gameName.substring(0, 4)
console.log(newString)

// slice if there is single parameter its omit before the parameter
//if there is a range its shows the range between them if there is negative range it range calculte from last
const anotherString = gameName.slice(-6, 5)
console.log(anotherString)

//console.log(typeof(gameName))

//trim = used to removing spaces
const newStringOne = "    hello "
console.log(newStringOne)
console.log(newStringOne.trim())

//replace = is used to replace the text inside the string
const url = "https:/sudheer%20verma"
console.log(url.replace("%20", '_'))

// we can also ask that text is present in this string or not with the help of includes
console.log(url.includes('sudheer'))

//split convert the string into array in the behave of particular parameter
const stringTwo = "hello everyone how are you"
console.log(stringTwo.split(' '))
