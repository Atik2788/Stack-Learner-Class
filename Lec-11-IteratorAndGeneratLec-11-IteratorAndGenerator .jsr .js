// using itetator
const channel = 'Hello'

const channelIterator = channel[Symbol.iterator]()
console.log(channelIterator.next())
console.log(channelIterator.next())
console.log(channelIterator.next())
console.log(channelIterator.next())
console.log(channelIterator.next())
console.log(channelIterator.next())
console.log(channelIterator.next())
console.log(channelIterator.next())


/* output value
(2) {value: "H", done: false}
(2) {value: "e", done: false}
(2) {value: "l", done: false}
(2) {value: "l", done: false}
(2) {value: "o", done: false}
(2) {value: undefined, done: true}
(2) {value: undefined, done: true}
(2) {value: undefined, done: true}
  */


while (true) {
  const data = channelIterator.next();
  
  if(data.done){
    break
  }
  console.log(data)
}

// output value:
// (2) {value: "H", done: false}
// (2) {value: "e", done: false}
// (2) {value: "l", done: false}
// (2) {value: "l", done: false}
// (2) {value: "o", done: false}


// genetator 
function* range(start = 0, stop = 100, step = 5){
    for(let i = start; i <= stop; i+= step){
        yield i
    }
}

const rangeIt = range();
console.log(rangeIt.next())
// console.log(rangeIt.next())
// console.log(rangeIt.next())

for(let v of range()){
    console.log(v)
}

// generate Id with generator

function* generateId() {
    let index = 1;
    while(true){
        yield index++
    }
}

const generateUserId = generateId()
const generateProductId = generateId()

console.log('User id', generateUserId.next().value)
console.log('User id', generateUserId.next().value)
console.log('User id', generateUserId.next().value)

console.log('Product id', generateProductId.next().value)
console.log('Product id', generateProductId.next().value)
console.log('Product id', generateProductId.next().value)
