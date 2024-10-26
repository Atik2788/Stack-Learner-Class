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

