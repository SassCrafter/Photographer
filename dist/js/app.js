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