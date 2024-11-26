const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(2000).then(() =>{
    console.log('Done in 2000 ms')
})

wait(3000).then(() =>{
    console.log('Done in 3000 ms')
})

wait(5000).then(() =>{
    console.log('Done in 5000 ms')
})
