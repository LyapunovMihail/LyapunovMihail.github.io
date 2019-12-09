
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


/// Menu
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

// Filter ============

let filter = document.querySelector('.objects__btn-filter');

let filterContent = document.querySelector('.objects__filter');
let selectAny = document.querySelector('.btn-selectAny');
let selectAll = document.querySelector('.btn-selectAll');
let selectAlloptions = document.querySelector('.objects__selectAll-options');
let selectAnyoptions = document.querySelector('.objects__selectAny-options');

filter.addEventListener('click', function() {
   
    filter.classList.toggle('objects__btn--active') ;
    filterContent.classList.toggle('objects__selectAny-options--block') ;
    
    
});
 
selectAny.addEventListener('click', function() {
   
    selectAnyoptions.classList.toggle('objects__selectAny-options--block') ;
    
    
});
selectAll.addEventListener('click', function() {
    selectAlloptions.classList.toggle('objects__selectAny-options--block') ;
    
});
// Map ============
let mapBtn = document.querySelector('.objects__btn-map');
let objectsMap = document.querySelector('.objects__map');
let objectsWrap = document.querySelector('.objects__item-container');
mapBtn.addEventListener('click', function() {
   
    mapBtn.classList.toggle('objects__btn--active') ;
    objectsMap.classList.toggle('objects__map--block') ;
    objectsWrap.classList.toggle('objects__item-container--none');
    
    
});

// Map


ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 10,
            controls: ['zoomControl']
        }),

        
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<img src="assets/img/obj1.jpg" class="img-map">'
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
            
            document.querySelector('.img-map').classList.add('img-map--hover');
        })
        .add('mouseleave', function (e) {
            document.querySelector('.img-map').classList.remove('img-map--hover');
        });

        clusterer = new ymaps.Clusterer({
            
            preset: 'islands#invertedRedClusterIcons',
            
            groupByCoordinates: false,
            clusterDisableClickZoom: false,
            clusterHideIconOnBalloonOpen: false,
            geoObjectHideIconOnBalloonOpen: false
        }),
       
            getPointData = function (index) {
            return ;
        },
        
            getPointOptions = function () {
            return {
                iconLayout: 'default#imageWithContent',
           
                iconImageHref: '',
              
                iconImageSize: [64, 64],
               
                iconImageOffset: [-24, -24],
                
                iconContentOffset: [15, 15],
                
                iconContentLayout: MyIconContentLayout  
            };
        },
        points = [
            [55.831903,37.411961], [55.831338,37.411961]
        ],
        geoObjects = [];

    
    for(var i = 0, len = points.length; i < len; i++) {
        geoObjects[i] = new ymaps.Placemark(points[i], getPointData(i), getPointOptions());
    }

    clusterer.add(geoObjects);
    myMap.geoObjects.add(clusterer);
    

});