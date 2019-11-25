function parallax (event) {
   ///паралакс1
        document.querySelector('.parallax-img1').style.transform = `translateY(${window.pageYOffset * 8/100}px)`;
        document.querySelector('.parallax-img3').style.transform = `translateY(${window.pageYOffset * (-14)/100}px)`;
        
        document.querySelector('.product__parallax-index1').style.transform = `translateY(${window.pageYOffset * (-14)/100}px)`;
        document.querySelector('.product__parallax-index2').style.transform = `translateY(${window.pageYOffset * 8/100}px)`;
//////////паралакс 2
        let pImg = document.querySelector('.stage__parallax-img2');
        pImg.style.transform = `translateY(${pImg.getBoundingClientRect().top  * - 0.08333}px)`;

        // console.log(pImg.getBoundingClientRect().top);


        
// Анимация годов
        let animItem1 = document.querySelector('.product__parallax-item6');
        
        if(window.pageYOffset > animItem1.offsetTop - 290) {
           
        animItem1.classList.add('product__parallax-item6--active');
        animItem1.classList.add('product__parallax-item6--op');
        }

        let animItem2 = document.querySelector('.product__parallax-item7');
        if(window.pageYOffset > animItem2.offsetTop - 290) {
            // console.log(animItem2.offsetTop);
        animItem2.classList.add('product__parallax-item7--active');
        animItem2.classList.add('product__parallax-item7--op');
        }
        let animItem3 = document.querySelector('.product__parallax-item8');
        if(window.pageYOffset > animItem3.offsetTop - 290) {
        animItem3.classList.add('product__parallax-item8--active');
        animItem3.classList.add('product__parallax-item8--op');
        } 
       
    
}

function showBlueScreen(e) {
    
    
    let helper = document.querySelector('.helper');
 
    let functions = document.querySelector('.functions');
    
    if(window.pageYOffset >  functions.getBoundingClientRect().top  + functions.getBoundingClientRect().height + 550) {
        functions.classList.add('functions--fixed');
        functions.classList.add('functions--fixed');
        helper.style.marginTop = `${functions.getBoundingClientRect().height}px`;
    }
    if(window.pageYOffset <  functions.getBoundingClientRect().top + functions.getBoundingClientRect().height + 550) {
        functions.classList.remove('functions--fixed');
        helper.style.marginTop = `${0}px`;
    }
}

document.addEventListener('scroll', parallax);
document.addEventListener('scroll', showBlueScreen);