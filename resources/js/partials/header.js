document.addEventListener('DOMContentLoaded', function() {
    const avatar = $('.avatar')
    avatar.click(function(){
        $('.block-nav').toggle()
    })
})

const navOerlay = document.querySelector('.nav__overlay')
const navMobile = document.querySelector('.nav__mobile')

const btnClose = document.querySelector('.nav__mobile-close')
const thanh3gach = document.querySelector('.fa-bars-3')

thanh3gach.onclick = function(e) {
    navOerlay.style.display = 'block'
    navMobile.style.animation = 'navBar_mobile_show 0.5s linear forwards'
}

btnClose.onclick = function(e) {
    navMobile.style.animation = 'navBar_mobile_hidden 1s linear forwards'
    navOerlay.style.display = 'none'
}
navOerlay.onclick = function(e) {
    navMobile.style.animation = 'navBar_mobile_hidden 1s linear forwards'
    navOerlay.style.display = 'none'
}
