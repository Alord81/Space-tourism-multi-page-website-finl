let nav = document.querySelectorAll('nav ul li')


nav.forEach((elemet) => {
    elemet.addEventListener('click', () => {
        nav.forEach((elemet) => {
            elemet.classList.remove('active')
            elemet.children[1].classList.remove('active')
        })
        elemet.children[1].classList.add('active')
        elemet.classList.add('active')
    })
})

// Hamburger Nav
let hamburgerNav = document.querySelector('.hamburger-nav'),
    navbar = document.querySelector('nav ul'),
    closeIcon = document.querySelector('.close')

hamburgerNav.addEventListener('click', () => {
    navbar.classList.remove('nav-active')
    navbar.style.right = '0%';
    navbar.classList.add('nav-active')
    setTimeout(() => {
        navbar.classList.add('nav-active')
    }, 550)
})
closeIcon.addEventListener('click', () => {
    navbar.style.right = '-100%';
    setTimeout(() => {
        navbar.classList.remove('nav-active')
    }, 500)
    // navbar.classList.remove('nav-active')
})
//---------- Hamburger Nav----------------
