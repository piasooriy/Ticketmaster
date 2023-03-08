export default function render(image, altText) {
	const slideshowimageElement = document.querySelector('.slideshow')
	const slideshowImage = document.createElement(img);
	slideshowImage.setAttribute('src', image);
	slideshowImage.setAttribute('alt', altText);
	slideshowImage.appendChild(slideshowImage)
};