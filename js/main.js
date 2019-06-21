const fadeCards = document.querySelectorAll('.fade-card');

function checkFade() {
    fadeCards.forEach(fadeCard => {
        const bounding = fadeCard.getBoundingClientRect();
        const halfHeight = fadeCard.getBoundingClientRect().height / 2;
        if (bounding.top >= -halfHeight && bounding.bottom - halfHeight <= window.innerHeight) {
            fadeCard.classList.add('shown');
        } else {
            fadeCard.classList.remove('shown');
        }
    });
}

window.addEventListener('DOMContentLoaded', checkFade);
window.addEventListener('scroll', checkFade);

$('.js-push').hover(function() {
    $(this).next('.js-push').toggleClass('push-right');
    $(this).prev('.js-push').toggleClass('push-left');
});