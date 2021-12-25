let modal = document.querySelector(".modal")
let header__btn = document.querySelector(".header__btn")
header__btn.addEventListener('click', function (){
    modal.style.display = 'flex'
})
let modal__content__title__close = document.querySelector(".modal__content__title__close")
modal__content__title__close.addEventListener('click', function (){
    modal.style.display = 'none'
})
