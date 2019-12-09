// Map


ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.669894, 37.871373],
            zoom: 14,
            controls: ['zoomControl']
        }),

        
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<img src="assets/img/marker.svg" class="img-map">'
        ),
        MyIconContentLayout2 = ymaps.templateLayoutFactory.createClass(
            '<img src="assets/img/marker2.svg" class="img-map">'
        ),

        

        myPlacemarkWithContent = new ymaps.Placemark([55.6741332775072,37.8586355], {
            iconContent: ''
        }
        , {
          
            iconLayout: 'default#imageWithContent',
           
            iconImageHref: '',
          
            iconImageSize: [64, 64],
           
            iconImageOffset: [0, 0],
            
            iconContentOffset: [0, 0],
            
            iconContentLayout: MyIconContentLayout
        }
        );
        myPlacemarkWithContent2 = new ymaps.Placemark([55.669894, 37.871373], {
            iconContent: ''
        }
        , {
          
            iconLayout: 'default#imageWithContent',
           
            iconImageHref: '',
          
            iconImageSize: [64, 64],
           
            iconImageOffset: [0, 0],
            
            iconContentOffset: [0, 0],
            
            iconContentLayout: MyIconContentLayout2
        }
        );


        myMap.behaviors.disable([ 'scrollZoom'])
    myMap.geoObjects
        // .add(myPlacemark)
        .add(myPlacemarkWithContent)
        .add(myPlacemarkWithContent2);
  

});

// Menu
let headerMenu = document.querySelector('.header__menu');
let menu = document.querySelector('.menu');
let btnClose = document.querySelector('.btn-close');
headerMenu.addEventListener('click', function() {
    menu.style.display = 'block';
    document.body.style.overflow = 'hidden';
});
btnClose.addEventListener('click', function() {
    menu.style.display = 'none';
    document.body.style.overflow = 'visible';
});
