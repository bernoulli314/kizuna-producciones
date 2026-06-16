const slides = document.querySelectorAll('.carrusel__item');
const botones = document.querySelectorAll('.carrusel__nav-link');

botones.forEach((boton, index) => {

    boton.addEventListener('click', () => {

        slides.forEach(slide => {
            slide.classList.remove('carrusel__item--activo');
        });

        slides[index].classList.add('carrusel__item--activo');

    });

});