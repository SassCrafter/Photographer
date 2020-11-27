const mobileToggler = document.querySelector('.mobile-toggler');
const nav = document.querySelector('.nav');
mobileToggler.addEventListener('click', function() {
    mobileToggler.classList.toggle('open');
    nav.classList.toggle('open');
});

// Header change on scroll

let scrollpos = window.scrollY;
const header = document.querySelector(".header");
const header_height = header.offsetHeight;

const add_class_on_scroll = () => header.classList.add('header-scrolled');
const remove_class_on_scroll = () => header.classList.remove("header-scrolled");

window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

});


// Change nav overlay img on hover
const navLinks = document.querySelectorAll('.nav a');
const navOverlay = document.querySelectorAll('.nav-overlay');
const active1 = document.querySelector('.active-1');
const linkActive = document.querySelector('.link-active');

navLinks.forEach(el => {
    el.addEventListener('mouseover', function() {
        let linkData = el.getAttribute('data-overlay');
        navLinks.forEach(el => {
            el.classList.remove('active');
        })
        el.classList.add('active');
        navOverlay.forEach(el => {
            if (el.getAttribute('data-overlay') == linkData) {
                navOverlay.forEach(el => {
                    el.classList.remove('active');
                })
                el.classList.add('active');
            }
        })
    });

    el.addEventListener('mouseleave', function() {
        navLinks.forEach(el => {
            el.classList.remove('active')
        });
        linkActive.classList.add('active');
        navOverlay.forEach(el => {
            el.classList.remove('active');
        });
        active1.classList.add('active');
    })
})