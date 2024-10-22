// map, filter, reduce

/* const numbers = [1, 2, 3, false, '', NaN, 4, 5, 6]
const strs = numbers.map((value) => value.toString())
console.log(strs);

const filtered = numbers.filter((v) => !!v)
console.log(filtered); 
*/


/* const numbers = [1, 2, 3, false, '', NaN, 4, 5, 6]
const filtered = numbers.filter((v) => !!v)
const strs = filtered.map((value) => value.toString())
console.log(strs);
 */




/**
 * Map => [Same length as the original array]
 * Filter => [with filtered item]
 * Reduce => know one knows (Only you knows) number, string, boolean, function, array, object (all posible data)
 */
const numbers = [1, 2, 3, false, '', NaN, 4, 5, 6]

// we want this => "123falseNaN456"
const result = numbers.reduce((acc, cur) =>{
    // acc += cur.toString()
    // return "123falseNaN456"
    if(cur){
        acc += cur.toString();
    }

    return acc
}, "")

console.log(result);
