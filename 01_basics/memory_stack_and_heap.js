//stack memory(primtive data types)

let myName = "Sudheer"
let updateName = myName
updateName = "Kumar Sudheer"
console.log(myName)
console.log(updateName)

//heap memory(nonprimitive datatypes)

let userOne = {
    email: "sudheerskb9@gmail.com",
    upi: "sudheer@ybl"
}

let userTwo = userOne

userTwo.email = "vsudheer"

 console.log(userOne)
 console.log(userTwo)

 //in above when we pass the one object value to the another object then it give the reference not the value
 //so when we print the object the show and changed in previous value