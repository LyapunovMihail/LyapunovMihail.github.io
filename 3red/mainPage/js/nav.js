

let projectnav = document.getElementById('projectnav');
let header = document.getElementById('header')
let prevScrollTop = 0;


window.onscroll = function() {scroll()};

function scroll() {
    
    let scrollTop = window.pageYOffset;


        if (scrollTop === 0) {

            header.classList.remove("header-fixed");
            header.classList.remove("header-fixed--hide");
            projectnav.classList.remove("project__nav-fixed");
            projectnav.classList.remove("project__nav-fixed--side");
        } else if (scrollTop > prevScrollTop && scrollTop > 77 ) {

            header.classList.add("header-fixed--hide");
            projectnav.classList.remove("project__nav-fixed--side");
            projectnav.classList.add("project__nav-fixed");
        } else if (scrollTop < prevScrollTop && scrollTop > 77) {

            header.classList.add("header-fixed");
            header.classList.remove("header-fixed--hide");
            projectnav.classList.add("project__nav-fixed--side");
        }

    prevScrollTop = scrollTop;
}



