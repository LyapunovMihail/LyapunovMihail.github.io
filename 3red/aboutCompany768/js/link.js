'use strict';

let links = document.querySelectorAll('.nav__link');



links.forEach(link => {
    

  link.addEventListener('mouseover', function () {
    links.forEach(link => link.style.opacity = '.5');
    
    this.style.opacity = '1';
   

  })
  link.addEventListener('mouseout', function () {
    
    links.forEach(link => link.style.opacity = '1');

  })
  link.addEventListener('click', function () {
    links.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
})
});