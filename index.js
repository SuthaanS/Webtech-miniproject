const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.loglink');
const registerLink = document.querySelector('.reglink');
const btnpop = document.querySelector('.button');

registerLink.addEventListener('click',()=> {
   wrapper.classList.add('active');      
});

loginLink.addEventListener('click',()=> {
        wrapper.classList.remove('active');
});

btnpop.addEventListener('click',()=> {
   wrapper.classList.add('active-popup');
});