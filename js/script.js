window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})


const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');
	menuLink = document.querySelector('.menu__link');

hamburger.addEventListener('click', function() {
	menu.classList.add('active');
});

closeElem.addEventListener('click', function() {
	menu.classList.remove('active');
});

menuLink.addEventListener('click', function() {
	menu.classList.remove('active');
})