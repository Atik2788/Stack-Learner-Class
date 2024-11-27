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


// use in project
// use in project
const axios = require("axios");
//npm i axios

const USERS_URl = 'https://jsonplaceholder.typicode.com/users';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
const COMMENT_URL = 'https://jsonplaceholder.typicode.com/comments';

// user name = Bret

async function getComment(username){
try{
    const {data: user} = await axios.get(`${USERS_URl}?username=${username}`);
    const {data: posts} = await axios.get(`${POSTS_URL}?userId=${user[0].id}`)
    const {data: comments} = await axios.get(`${COMMENT_URL}?postId=${posts[0].id}`)
    const {data: userWithComment} = await axios.get(`${USERS_URl}?email=${comments[0].email}`)
    
    console.log('comments user: ', userWithComment)
} catch(e){
    console.log("Error finding: ", e.message)
}

}

getComment('Bret')
