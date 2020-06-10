burger = document.querySelector('.burger')
navlist= document.querySelector('.navlist')

burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-class');
})