//  взяти посилання на кнопки 
// взяти посилання на список фотографій 
// створити функцію для роботи слайдера 
//  рефакторинг 

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const listOfImages = document.querySelector(".slides");
let currentSlide = 0;


function moveSlides(position) {
	const totalSlides = listOfImages.children.length;
	
	if (position >= totalSlides) {
		position = 0;
	} else if (position < 0) {
		position = totalSlides - 1;
	} 
	
	listOfImages.style.transform = `translateX(-${position * 800}px)`;
}


prevBtn.addEventListener('click',()=> moveSlides(currentSlide -1));
nextBtn.addEventListener('click',()=> moveSlides(currentSlide+1));











