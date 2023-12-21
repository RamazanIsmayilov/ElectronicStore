const preLoader = document.querySelector('.preloader');
const myPage = document.querySelector('.mypage');

setTimeout(() => {
    preLoader.style.display = 'none';
    myPage.style.display = 'block';
}, 4000);