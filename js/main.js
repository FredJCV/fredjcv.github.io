const github = document.getElementById('github');
const linkedin = document.getElementById('linkedin');

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

github.addEventListener('mouseenter', addPushRight);
github.addEventListener('mouseleave', removePushRight);
linkedin.addEventListener('mouseenter', addPushLeft);
linkedin.addEventListener('mouseleave', removePushLeft);