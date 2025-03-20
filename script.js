
const navbarMenu = document.querySelector('.navbar-menu')

const hamburgerMenu = document.getElementById('hamburger')

hamburgerMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active')
})