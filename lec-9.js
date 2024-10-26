function generateTowRandomNumber (max, formUser) {
    const random1 = Math.floor(Math.random() * max);
    const random2 = Math.floor(Math.random() * max);
    const result = formUser(random1, random2)

    return result;
}

// first way***************
function formUser(random1, random2, ){
    console.log("numbers: ",random1, random2);
    return random1 * random2
}
console.log(generateTowRandomNumber(50, formUser));

// 2nd way ****************
generateTowRandomNumber(50, (random1, random2) =>{
    console.log(random1, random2);
})

console.log(generateTowRandomNumber(20, (ran1, ran2) => ran1 * ran2));
console.log(generateTowRandomNumber(100, (ran1, ran2) => ran1 - ran2));
console.log(generateTowRandomNumber(10, (ran1, ran2) => ran1 / ran2));