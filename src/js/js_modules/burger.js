'use script'


function burger() {
    let a = document.querySelector('.burger')
    let d = document.querySelector('body')
    let c = document.querySelector('.menu__list')
    

    a.addEventListener('click', () => {
        a.classList.toggle('burger-open')
        d.classList.toggle('body-lock')
        c.classList.toggle('menu-open')

    })
}
burger();

