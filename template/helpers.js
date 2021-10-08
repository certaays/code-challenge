export const getPosts = async () => {
  // EDIT HERE
<<<<<<< HEAD
  try{
    const getPosts = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=16')
    return getPosts.json()
  }catch(e){
    console.log('error');
  }
};

export const getPost = async (post_id) => {
  // EDIT HERE
  try{
    const getPosts = await fetch(`https://jsonplaceholder.typicode.com/posts?post_id=${post_id}`)
    return getPosts.json()
  }catch(e){
    console.log('error');
  }
};

export const getPostComments = async (post_id) => {
  // EDIT HERE
  const getPosts = await fetch(`https://jsonplaceholder.typicode.com/posts/comments`)
  return getPosts.json()
};

export const getAuthor = async (user_id) => {
  // EDIT HERE
};

export const getPostsByAuthor = async (author_id) => {
  // EDIT HERE
};

export const getRandomPic = async () => {
=======
>>>>>>> 67405d131196d2a5d097510c39234ee6baeb0827
  try {
   const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => response.json())
   return posts;

 } catch (error) {
   console.log(error);
   throw error;
 }
 };
 
 export const getPost = async (post_id) => {
   // EDIT HERE
   // try{
   //   const response = await fetch{
   //     `https://jsonplaceholder.typicode.com/posts${post_id}`,
   //     {
 
   //     }
   //   }
 
   // }
 };
 
 export const getPostComments = async (post_id) => {
   // EDIT HERE
 
 };
 
 export const getAuthor = async (user_id) => {
   // EDIT HERE
 };
 
 export const getPostsByAuthor = async (author_id) => {
   // EDIT HERE
 };
 
 export const getRandomPic = async () => {
   try {
     const image = await fetch('https://source.unsplash.com/random/720x480');
     return image.url;
   } catch (error) {
     console.log('getRandomPic', error);
     throw error;
   }
 };
 
 export const getRandomProfile = async () => {
   try {
     const image = await fetch('https://source.unsplash.com/480x480/?profile');
     return image.url;
   } catch (error) {
     console.log('getRandomProfile', error);
     throw error;
   }
 };