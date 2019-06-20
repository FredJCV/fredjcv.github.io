const github = document.getElementById('github');
const linkedin = document.getElementById('linkedin');
const fadeCards = document.querySelectorAll('.fade-card');

function addPushRight() {
    linkedin.classList.add("push-right");
};

function removePushRight() {
    linkedin.classList.remove("push-right");
};

function addPushLeft() {
    github.classList.add("push-left");
};

function removePushLeft() {
    github.classList.remove("push-left");
};

function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function checkFade(e) {
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

github.addEventListener('mouseenter', addPushRight);
github.addEventListener('mouseleave', removePushRight);
linkedin.addEventListener('mouseenter', addPushLeft);
linkedin.addEventListener('mouseleave', removePushLeft);
window.addEventListener('DOMContentLoaded', debounce(checkFade));
window.addEventListener('scroll', debounce(checkFade));