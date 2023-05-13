const menuBtn = document.querySelector('#menu-btn');
const menuList = document.querySelector('#menu-list');

menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('open-menu');
    menuList.classList.toggle('show');
})