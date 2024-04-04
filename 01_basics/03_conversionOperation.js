let score = "33abc"

console.log(typeof score) // result: string

// we dont know the value is come from front and is surely a number(or other variable) use conversion before applying logic

let valueInNumber = Number(score) // if i want to operation on number 100%

console.log(valueInNumber)

console.log(typeof(valueInNumber))// result: number

let temperature = null

console.log(typeof(temperature))

let tempInNumber = Number(temperature)

console.log(tempInNumber)
// if we want to convert null (which is object) into number its result: 0 
// if we want to convert undefined into number its result: NaN(not a number)

// "33" => convert into number =>result:console.log() 33 => result:console.log(typeof): number
// "33abc" => convert into number =>result:console.log() NaN => result:console.log(typeof): number

// 1=> true 
// 0=> false
// empty string => false
// any string => true


// *********************** Operations ********************








