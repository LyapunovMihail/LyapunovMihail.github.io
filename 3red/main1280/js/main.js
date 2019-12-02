
let header = document.querySelector('.header')
let prevScrollTop = 0;


window.onscroll = function() {scroll()};

function scroll() {
    
    let scrollTop = window.pageYOffset;


        if (scrollTop === 0) {

            header.classList.remove("header-fixed");
            header.classList.remove("header-fixed--hide");
            
        } else if (scrollTop > prevScrollTop && scrollTop > 86 ) {

            header.classList.add("header-fixed--hide");
            
        } else if (scrollTop < prevScrollTop && scrollTop > 86) {
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

// Подбор квартир все комплексы
let offerBtn = document.querySelector('.offer__complex-search');
let offerWrap = document.querySelector('.offer__complex-wrap');
offerBtn.addEventListener('click', function() {
    offerWrap.classList.toggle('offer__complex-wrap--block');
    offerBtn.classList.toggle('offer__complex-search--active');

});
// Выбор Района
let utilBtn = document.querySelector('.objects__utilities-search');
let utilWrap = document.querySelector('.objects__utilities-wrap');
utilBtn.addEventListener('click', function() {
    utilWrap.classList.toggle('objects__utilities-wrap--block');
    utilBtn.classList.toggle('objects__utilities-search--active');

});

//Паралакс 

function parallax (event) {
    ///паралакс1
    
         document.querySelector('.about__img2').style.transform = `translateX(${window.pageYOffset * 25/100}px)`;
         document.querySelector('.about__img3').style.transform = `translateY(${window.pageYOffset * 30/100}px)`;
         document.querySelector('.about__img4').style.transform = `translateX(${window.pageYOffset * (-35)/100}px)`;
        //  pImg.style.transform = `translateY(${pImg.getBoundingClientRect().top  * - 0.08333}px)`;
     ///паралакс2
let parImg1 = document.querySelector('.info-img1').getBoundingClientRect().top;
     if(parImg1 < 200) {
        document.querySelector('.info-img1').style.transform = `translateY(${-parImg1 * 25/100}px)`;
        document.querySelector('.info-img3').style.transform = `translateY(${parImg1 * 15/100}px)`;
     }
     

}
document.addEventListener('scroll', parallax);

// Скрывать объекты 
let switch1 = document.querySelector('.switch');

function check() {
    let objCont = document.querySelector('.objects__item-container');
    let objMap = document.querySelector('.objects__map');
    
    if(switch1.checked) {
        objCont.style.display = 'none';
        objMap.style.display = 'flex';
    } else {
        objCont.style.display = 'grid';
        objMap.style.display = 'none';
    }
}

switch1.addEventListener('change', check);


// Map


ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9,
            controls: ['zoomControl']
        }),

        
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<img src="assets/img/map-obj/obj1.jpg" class="img-map">'
        ),

        

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            iconContent: ''
        }
        , {
          
            iconLayout: 'default#imageWithContent',
           
            iconImageHref: '',
          
            iconImageSize: [64, 64],
           
            iconImageOffset: [-24, -24],
            
            iconContentOffset: [15, 15],
            
            iconContentLayout: MyIconContentLayout
        }
        );
        myMap.behaviors.disable([ 'scrollZoom'])
    myMap.geoObjects
        // .add(myPlacemark)
        .add(myPlacemarkWithContent);

        myPlacemarkWithContent.events
        .add('mouseenter', function (e) {
            // Ссылку на объект, вызвавший событие,
            // можно получить из поля 'target'.
            // e.get('target').options.set('preset', 'islands#greenIcon');
            document.querySelector('.img-map').classList.add('img-map--hover');
        })
        .add('mouseleave', function (e) {
            document.querySelector('.img-map').classList.remove('img-map--hover');
        });
});
   

