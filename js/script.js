let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showNextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    const offset = -slideIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, 3000); // Change image every 3 seconds

function sortGallery() {
    const gallery = document.getElementById('gallery');
    const items = Array.from(gallery.getElementsByClassName('gallery-item'));

    items.sort((a, b) => a.dataset.order - b.dataset.order);

    items.forEach(item => gallery.appendChild(item));
}
