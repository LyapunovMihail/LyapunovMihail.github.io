let sliderArrow = document.querySelector('.stage__btn');
let sliderFScreen = document.querySelector('.stage__slider');
let slider = document.querySelectorAll('.stage__slider-container');
let sliderPrev = document.querySelector('.slider__button-left');
let sliderNext = document.querySelector('.slider__button-right');
let sliderControls = document.querySelector('.stage__slider-items');

let sliderDot = document.querySelectorAll('.stage__slider-dot');
let sliderNumber = document.querySelector('.stage__slider-num');




sliderArrow.addEventListener('click', function() {
    sliderFScreen.style.display = 'none';
    sliderFScreen.classList.remove('show')
    slider[0].classList.add('show');
    sliderNumber.innerHTML = `1/10`;
    sliderControls.style.display = 'block';
    sliderDot[0].classList.add('stage__slider-dot--active');
});


// function nextSlide(e) {

//     e.preventDefault();

//     const current = document.querySelector('.show');
//     const activeDot = document.querySelector('.stage__slider-dot--active');

//     current.classList.remove('show');
//     activeDot.classList.remove('stage__slider-dot--active');
   
  
//     if(current.nextElementSibling) {

//         slider.forEach(slide => {

//             let number = Array.from(slider).indexOf(current.nextElementSibling)  + 1 ;
//                 sliderNumber.innerHTML = `${number}/10`;
//                 console.log(Array.from(slider).indexOf(current) + 1);
                 
//             });
       

//         current.nextElementSibling.classList.add('show');
//         activeDot.nextElementSibling.classList.add('stage__slider-dot--active');
        
       

//     } else {
        
//         sliderFScreen.classList.add('show');
//         sliderControls.style.display = 'none';

//     }
    
    
// }

// sliderNext.addEventListener('click', nextSlide);
 
//   function prevSlide(e) {
    
//     e.preventDefault();

//     const current = document.querySelector('.show');
//     const activeDot = document.querySelector('.stage__slider-dot--active');

//     current.classList.remove('show');
//     activeDot.classList.remove('stage__slider-dot--active');

//     if (current.previousElementSibling){

//         slider.forEach(slide => {

//             let number = Array.from(slider).indexOf(current)  ;
//                 sliderNumber.innerHTML = `${number}/10`;
//                 console.log(Array.from(slider).indexOf(current) + 3);
                 
//             });

//         current.previousElementSibling.classList.add('show');
//         activeDot.previousElementSibling.classList.add('stage__slider-dot--active');

//     } 
//     else   {

//         sliderFScreen.style.display = 'block';
//         sliderControls.style.display = 'none';
//         sliderControls.classList.remove('show');
//         slider[0].classList.remove('show');
//     }
   
    
// }

// sliderPrev.addEventListener('click', prevSlide);