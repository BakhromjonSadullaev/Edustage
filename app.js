const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`
            }
        })


        burger.classList.toggle('toggle')

    })



}


const dropdowns = () => {
    const pages = document.getElementById('pages')
    const pagesDropdown = document.querySelector('.pages-dropdown')
    const blog = document.getElementById('blog')
    const blogDropdown = document.querySelector('.blog-dropdown')
    pages.addEventListener('click', () => {
        pagesDropdown.classList.toggle('show')
    })

    blog.addEventListener('click', () => {
        blogDropdown.classList.toggle('show')
    })


}


window.addEventListener('scroll', function () {
    const navN = document.getElementById('nav');
    const scrollHeight = window.pageYOffset;
    const navHeight = navN.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navN.classList.add('fixed-nav')
    } else {
        navN.classList.remove('fixed-nav')
    }
})




dropdowns()

navSlide()