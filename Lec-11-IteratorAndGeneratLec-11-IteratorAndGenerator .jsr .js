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


/* value
(2) {value: "H", done: false}
(2) {value: "e", done: false}
(2) {value: "l", done: false}
(2) {value: "l", done: false}
(2) {value: "o", done: false}
(2) {value: undefined, done: true}
(2) {value: undefined, done: true}
(2) {value: undefined, done: true}
  */
