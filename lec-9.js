//Higher Order Function
//Higher Order Function
function generateTowRandomNumber (max, callBack) {
    const random1 = Math.floor(Math.random() * max);
    const random2 = Math.floor(Math.random() * max);
    const result = callBack(random1, random2)

    return result;
}

// first way***************
function formUserFn(random1, random2, ){
    console.log("numbers: ",random1, random2);
    return random1 * random2
}
console.log(generateTowRandomNumber(5, formUserFn));



// 2nd way ****************
generateTowRandomNumber(50, (random1, random2) =>{
    console.log(random1, random2);
})

console.log(generateTowRandomNumber(20, (ran1, ran2) => ran1 * ran2));
console.log(generateTowRandomNumber(100, (ran1, ran2) => ran1 - ran2));
console.log(generateTowRandomNumber(10, (ran1, ran2) => ran1 / ran2));


// Power function
function power(p){
    return function (n){
        let result = 1;
        for(let i = 1; i <= p; i++){
            result *= n
        }
        return result;
    }
}

const sqr = power(2)
const cube = power(3)
const power8 = power(8)

console.log("sqr of 5:", sqr(5));
console.log('cube of 3:', cube(3));

// Power function 2
function power2(num,pow){
    let result = 1;
    for(let i = 1; i <= pow; i++){
        result *= num
    }
    return result
}

console.log("sqr2 of 8:", power2(8, 2));
console.log('cube2 of 4:', power2(4, 3));