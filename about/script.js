const navbarMenu = document.querySelector('.navbar-menu')

const hamburgerMenu = document.getElementById('hamburger')

hamburgerMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active')
})

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show"); // Menghilangkan saat di-scroll ke atas
                }
            });
        },
        { threshold: 0.3 }
    );

    const elements = document.querySelectorAll(".hidden");
    elements.forEach(el => observer.observe(el));
});