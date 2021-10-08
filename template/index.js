import { getPosts, getRandomPic } from './helpers.js';

const elDaftarBerita = document.querySelector('#daftar-berita');

/**
 *
 * @param {String} thumbnail => url yang kita ambil menggunakan Unsplash API
 * @param {Object} post => object post yang kita ambil dari jsonplaceholder API
 * @returns DOM Element
 */
const createPostElement = (thumbnail, post) => {
  const elCol = document.createElement('div');
  const elCard = document.createElement('div');
  const elCardImg = document.createElement('img');
  const elCardBody = document.createElement('div');
  const elCardTitle = document.createElement('h5');
  const elCardBtn = document.createElement('a');

  elCol.classList.add('col-xs-12', 'col-sm-6', 'col-md-4', 'col-lg-3');
  elCard.classList.add('card', 'w-100', 'my-3');
  elCardImg.classList.add('card-img-top');
  elCardBody.classList.add('card-body');
  elCardTitle.classList.add('card-title');
  elCardBtn.classList.add('btn', 'btn-primary', 'w-100', 'stretched-link');

  elCardImg.setAttribute('alt', 'skilvul');
  elCardBtn.innerHTML = 'Read More';

  elCardBody.appendChild(elCardTitle);
  elCardBody.appendChild(elCardBtn);
  elCard.appendChild(elCardImg);
  elCard.appendChild(elCardBody);
  elCol.appendChild(elCard);

  // EDIT HERE
<<<<<<< HEAD
  elCardTitle.innerHTML = post.title 
  elCardImg.setAttribute('src', thumbnail)
  elCardBtn.addEventListener('click', function(){
    elCardBtn.setAttribute('href', 'post.html?post_id=' + post.id)
    getPosts(post.id)
  })
=======
  elCardTitle.innerHTML = post.title;
  elCardImg.setAttribute('src', thumbnail);
  elCardBtn.setAttribute('href', 'post.html?post_id=' + post.id);

>>>>>>> 67405d131196d2a5d097510c39234ee6baeb0827
  return elCol;
};

const renderPosts = async () => {
  // EDIT HERE
<<<<<<< HEAD
  let news = document.getElementById('daftar-berita')
  let post = await getPosts()
  
  for(let i=0; i<post.length; i++){
    let img = await getRandomPic()
    news.appendChild(createPostElement(img, post[i]))
=======
  let posts = await getPosts();
  let daftarBerita = document.getElementById('daftar-berita');
  for(let i = 0; i < 16; i++){
    let thumbnail = await getRandomPic();
    daftarBerita.appendChild(createPostElement(thumbnail, posts[i]));
>>>>>>> 67405d131196d2a5d097510c39234ee6baeb0827
  }
};

renderPosts();