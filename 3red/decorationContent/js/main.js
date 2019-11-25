'use strict';
// Авторесайз поля  textarea  в описании проекта
let observe;
if (window.attachEvent) {
    observe = function (element, event, handler) {
        element.attachEvent('on'+event, handler);
    };
}
else {
    observe = function (element, event, handler) {
        element.addEventListener(event, handler, false);
    };
}
function init () {
    // let text = document.getElementById('text');
    let textareas = document.querySelectorAll('.textarea');
    Array.from(textareas).forEach((textarea) => {
      
        observe(textarea, 'change',  resize);
        observe(textarea, 'cut',     delayedResize);
        observe(textarea, 'paste',   delayedResize);
        observe(textarea, 'drop',    delayedResize);
        observe(textarea, 'keydown', delayedResize);

        function resize () {
            
                textarea.style.height = '40px';
                textarea.style.height = textarea.scrollHeight  + 'px';

        }
        
        /* 0-timeout to get the already changed text */
        function delayedResize () {
            window.setTimeout(resize, 0);
        }

        textarea.focus();
        textarea.select();
        resize();
        
    })
    



}