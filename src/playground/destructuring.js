// const person = {
//     name: 'Fred',
//     age: 27,
//     location:{
//         city: 'philadelpiha',
//         temp: 92
//     }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`it is ${temperature} in ${city}`)
// }


// const book = {
//     title : 'Ego is the enemy',
//     author : 'Ryan Holiday',
//     publisher : {
//         name : 'Penguin'
//     }
// }

// const { name: publisherName = 'self-published'  } = book.publisher

// console.log(publisherName) 

// Array destructuring

const address = ['1299 S juniper Street', 'Philly', 'Pennsylvania', 'zip']
const [ ,city , yourState = 'New' ] = address
// console.log(` You are in ${address[1]}, ${address[2]}`)
console.log(` You are in  ${yourState}`)

const item = ['Coffee (hot)', '$3', '$3.5', '$3.75']
const [ itemName,, mediumPrice, ] = item
console.log(`a medium ${itemName} costs ${mediumPrice} `)