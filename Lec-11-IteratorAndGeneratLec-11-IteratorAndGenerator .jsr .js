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
