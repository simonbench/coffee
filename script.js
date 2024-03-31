let nav = document.querySelector('nav');
let src = document.getElementById('src');
let form = document.querySelector('.form');
let burger = document.getElementById('burger');
let menu = document.querySelector('.menu');
let lune = document.getElementById('lune');
let body = document.querySelector('body');

lune.addEventListener('click', () => {
    lune.classList.toggle('bxs-sun')
    body.classList.toggle('active')
});

document.querySelectorAll('a').forEach(test => test.addEventListener('click', () => {
    menu.classList.remove('active')
    burger.classList.remove('bx-x')
}));

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
    burger.classList.toggle('bx-x')
    form.classList.remove('active')
});

src.addEventListener('click', () => {
    form.classList.toggle('active')
    menu.classList.remove('active')
    burger.classList.remove('bx-x')
});

window.addEventListener('scroll', () => {
    nav.classList.toggle('active', scrollY > 0)
    form.classList.remove('active')
    menu.classList.remove('active')
    burger.classList.remove('bx-x')
});

let sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
})
sr.reveal('.text, .image, .cards, .content, .cartes, .stars .logos, .support, .guide, .contact, .copy, h1', {interval: 200})