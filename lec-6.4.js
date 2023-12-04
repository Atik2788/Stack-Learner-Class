const names = [
	'Ayman',
	'Abu Rayhan',
	'Anik',
	'Elias Emon',
	'Engr. Sabbir',
	'Fahim Faisal',
	'Feroz Khan',
	'Habib',
	'HM Azizul',
	'Hridoy Saha',
	'Jahid Hassan',
	'Johir',
	'Md Al-Amin',
	'Md Arafatul',
	'Md Ashraful',
	'Parvez',
	'Aladin'
];


const namesGrouped = names.reduce((acc, cur) =>{
    const firstLetter = cur[0].toUpperCase();

    if(firstLetter in acc){
        // console.log('found: ', firstLetter);
        acc[firstLetter].push(cur)
    } 
    else{
        // console.log('not found: ', firstLetter);
        acc[firstLetter] = [cur];
    }
    // console.log(acc);

    return acc;
}, {})

// console.log(namesGrouped);   

Object.keys(namesGrouped).forEach(gorupKey =>{
    console.log('-----------', gorupKey, '------------');
	namesGrouped[gorupKey].forEach(name => console.log(name))
})
