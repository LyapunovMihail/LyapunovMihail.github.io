let btnShow = document.querySelector('.hint__link');
let btnHide = document.querySelector('.btn-hide');
let textHide = document.querySelector('.hint__content');

btnShow.addEventListener('click', function() {
  textHide.style.display ='block';
  btnShow.style.display ='none';
});
btnHide.addEventListener('click', function() {
  textHide.style.display ='none';
  btnShow.style.display ='block';
});