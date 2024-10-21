const numbers = [1, 2, 3, 4, 5, 6]

numbers.forEach((value, index, arr) =>{
    // console.log(value, index, arr);
})

numbers.forEach((value) =>{
    if(value % 2 ===0){
        console.log(value);
    }
})


// delete obj wihichs id is 4
const arr = [
	{ id: 1, value: 10 },
	{ id: 2, value: 20 },
	{ id: 3, value: 30 },
	{ id: 4, value: 40 },
	{ id: 5, value: 50 },
];

// const index = arr.findIndex((item) => item.id === 4)
// console.log('index', index);
// const arr1 = arr.splice(index, 1)
// console.log(arr1);
// console.log(arr);


const arr2 = arr.filter((item) => item.id !== 4)
console.log(arr);
console.log(arr2);