const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.right-arrow');
const prevBtn = document.querySelector('.left-arrow');

let currentSlide = 0;

function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove('active');
        slide.classList.remove('show-description');
        slide.classList.remove('hide-image');

        const btn = slide.querySelector('.toggle-btn');
        btn.textContent = 'View Description';
    });

    slides[index].classList.add('active');
}

showSlide(currentSlide);

// NEXT BUTTON

nextBtn.addEventListener('click', () => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
});

// PREVIOUS BUTTON


prevBtn.addEventListener('click', () => {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});

// TOGGLE DESCRIPTION

slides.forEach((slide) => {

    const btn = slide.querySelector('.toggle-btn');

    btn.addEventListener('click', () => {

        // CHECK IF DESCRIPTION IS OPEN
        const isOpen = slide.classList.contains('show-description');

        if (isOpen) {

            // HIDE DESCRIPTION
            slide.classList.remove('show-description');
            slide.classList.remove('hide-image');

            btn.textContent = 'View Description';

        } else {

            // SHOW DESCRIPTION
            slide.classList.add('show-description');
            slide.classList.add('hide-image');

            btn.textContent = 'Hide Description';
        }

    });

});