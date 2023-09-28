window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
// ScrollSmoother.create({
// 	wrapper: '.wrapper',
// 	content: '.content'
// })


const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');
	// menuLink = document.querySelector('.menu__link');
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



/////Section Skills //////

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

/////AOS INIT/////


AOS.init({
	// disable: 'phone',
	duration: 2000,
});