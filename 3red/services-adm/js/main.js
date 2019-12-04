let header = document.querySelector('.header')
let prevScrollTop = 0;


window.onscroll = function() {scroll()};

function scroll() {
    
    let scrollTop = window.pageYOffset;


        if (scrollTop === 0) {

            header.classList.remove("header-fixed");
            header.classList.remove("header-fixed--hide");
            
        } else if (scrollTop > prevScrollTop && scrollTop > 77 ) {

            header.classList.add("header-fixed--hide");
            
        } else if (scrollTop < prevScrollTop && scrollTop > 77) {
            header.classList.add("header-fixed");
            header.classList.remove("header-fixed--hide");
            
        }

    prevScrollTop = scrollTop;
}

//header links

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
