'use strict';
// Open and close modal

let chooseIconBtns = document.querySelectorAll('.decoration-settings__text');
let modal = document.querySelector('.modal');
let modalWrap = document.querySelector('.flex__wrap');
let body = document.querySelector('#body');
let closeModalBtn = document.getElementById('closeModal');

chooseIconBtns.forEach(chooseIconBtn => {
    chooseIconBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        body.style.overflow = 'hidden';
    }
    )}
    );

closeModalBtn.addEventListener('click', closeModal);
function closeModal() {
        modal.style.display = 'none';
        body.style.overflow = 'scroll';
    }

window.addEventListener('click', clickOutside);
function clickOutside(e) {
    if(e.target == modalWrap) {
    modal.style.display = 'none';
    body.style.overflow = 'visible';
    }  
}

