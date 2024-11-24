const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const listOfImages = document.querySelector(".slides");
let currentSlide = 0;


function moveSlides(position) {
	const totalSlides = listOfImages.children.length;

	if (position < 0) {
		currentSlide = position = totalSlides - 1;
	}
	if (position > totalSlides - 1) {
		currentSlide = position = 0;
	}
	
	listOfImages.style.transform = `translateX(-${position * 800}px)`;
}


prevBtn.addEventListener('click', () => {currentSlide -= 1; moveSlides(currentSlide)});
nextBtn.addEventListener('click', () => {currentSlide += 1; moveSlides(currentSlide)});
