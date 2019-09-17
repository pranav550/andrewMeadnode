const fs = require("fs");


const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = "priya",
    user.age = 26
const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON)








/////////////////////////////////////////////////////////


// const dataBuffer = fs.readFileSync('1-JSON.json')
// console.log(dataBuffer)
// console.log(dataBuffer.toString())
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON)
// console.log(data.title)

/////////////////////////////////////////////////////////

// const book = {
//     title: 'ego is the enemy',
//     author: 'Ryan Holiday'
// }
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)


///////////////////////////////////////////////////////////

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedJSON = JSON.parse(bookJSON)
// console.log(parsedJSON)
// console.log(parsedJSON.title)