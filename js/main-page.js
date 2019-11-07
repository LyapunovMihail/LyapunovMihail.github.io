$(function() {
    var delaySlideMove = 900; // Если менять время тут, то и в файле "_main-floor.sass" строка 31, у класса ".floor"(transition), для равномерной смены слайдов
    // Отвечает за скорость смены этажей и скорость переключения анимации

    var endBlackLogo = '';
    // Лого в хедере
    $(document).on('mousewheel DOMMouseScroll MozMousePixelScroll', function() {
        
        if ($(window).width() > 1440) {
            
            setTimeout(function() {
                navIndexBefore = $('.active').index('.floor');
                
                var elCount = $('.index-main').children().length,
                    removeBlackClass = $(window).height() * ((elCount - 2) * (-1));

                if ($('.index-main').offset().top < (-15) && $('.index-main').offset().top > (removeBlackClass + 100)) {
                    $('.header').addClass('header_black-image');
                } else {
                    $('.header').removeClass('header_black-image');
                };
                navIndexAfter = $('.active').index('.floor');
            }, delaySlideMove);
        };
    });
    $(window).on('scroll', function() {

        endBlackLogo = $('.floor-advertising').length > 0 ? $('.floor-advertising').offset().top : $('.floor-footer').offset().top;
        
        if ($(window).scrollTop() > $(window).height() && $(window).scrollTop() < endBlackLogo || $('.header').hasClass('header_background') ) {
            
            $('.header').addClass('header_black-image');
            if (!$('body').hasClass('floor-body')) return;
            $('.header').addClass('header_fade');
            if ($('.index-main').length > 0) changeNavScroll( $(window).scrollTop() );
        } else {
            $('.header').removeClass('header_black-image');
            $('.header').removeClass('header_fade');
            $('.header__nav').css('display', 'none');
        }
    });
    // Переключение навигации при обычном скролле
    function changeNavScroll(scroll) {

        if ($('.header__nav').css('display') == 'none') {
            $('.header__nav').css('display', 'block');
        };
        $('.floor').not('.floor_one, .floor_seven, .floor-footer').each( function(i, el) {

            if (scroll > $(el).offset().top) {
                $('.header__nav-list').css('top', 45 - ((i + 1) * 21) + 'px');

                $('.header__nav-item').removeClass('header__nav-item_active');
                $('.header__nav-item').eq(i).addClass('header__nav-item_active');
            }
            
        });
    };

    // Слайдер на "1м этаже"
    $('.floor__slider').on('init', function(e, slick) {
        // Добавляю активный класс для навигатационного блока
        $('.category-list__item').eq(slick.currentSlide).addClass('category-list__item_active');
    }).slick({
        prevArrow: $('.floor__slider-btns_prev'),
        nextArrow: $('.floor__slider-btns_next'),
        slidesToShow: 1,
        infinite: false,
        asNavFor: '.floor__headline'
    }).on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        // переключаю блоки навигации(которые рядом с кнопками, т.к один скрывается при разрешении 1200,)
        $('.category-list__item').removeClass('category-list__item_active').eq(nextSlide).addClass('category-list__item_active');

        if (currentSlide == 2 && $(window).width() < 1199 && $(window).width() > 960) {
            
            $('.category-list__item').css('transform', 'translateX(-260px)')
        } else if ( currentSlide != 3 && $(window).width() < 1199 && $(window).width() > 960) {
            $('.category-list__item').css('transform', 'translateX(0)')
        }
    });
    $('.category-list').on('click', '.category-list__item', function() {

        if($(this).index() == 2 && $(window).width() < 1199 && $(window).width() > 960) {
            $('.floor__slider').slick('slickGoTo', $(this).index());
            $('.category-list__item').css({
                transform: 'translateX(-260px)'
            })
        } else if ($(this).index() == 1 && $(window).width() < 1199 && $(window).width() > 960) {

            $('.floor__slider').slick('slickGoTo', $(this).index());
            $('.category-list__item').css({
                transform: 'translateX(0)'
            })
        } else {
            $('.floor__slider').slick('slickGoTo', $(this).index());
        }
    });
    $('.floor__headline').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.floor__slider',
        arrows: false,
        infinite: false,
        focusOnSelect: true
    })

    //Слайдер на "2м этаже"

    if ($(window).width() > 960) {
        
        $('.floor-two__slider_top').not('.floor-two__slider_top-media').slick({
            prevArrow: $('.floor-two__slider-prev_top'),
            nextArrow: $('.floor-two__slider-next_top'),
            slidesToShow: 1,
            infinite: false
        });
    } else {

        $('.floor-two__slider_top-media').slick({
            arrows: false,
            slidesToShow: 1,
            infinite: false,
            responsive: [
                {
                    breakpoint: 961,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 551,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    $('.floor-two__slider_down').slick({
        prevArrow: $('.floor-two__slider-prev_down'),
        nextArrow: $('.floor-two__slider-next_down'),
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false
    });

    // 3й и последующие этажы, до рекламы
    $('.floor-common__slider').each(function() {
    var prev = $(this).prev().prev(),
        next = $(this).prev(),
        thisSlider = $(this),
        thisSliderItem = thisSlider.find('.floor-common__slider-item');

        $(this).slick({
            prevArrow: prev,
            nextArrow: next,
            slidesToShow: $(this).hasClass('floor-common__slider_top') ? 2 : 4,
            slidesToScroll: 1,
            infinite: false,
            responsive: [
                {
                    breakpoint: 961,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        });
    });
    if ($(window).width() > 1440) {

        $('.index-main').onepage_scroll({
            sectionContainer: 'section',
            easing: 'ease',
            animationTime: delaySlideMove,
            pagination: false,
            updateURL: false,
            loop: false,
            responsiveFallback: 1440,
            keyboard: false,
            afterMove: function(i) {

                if ( $('.floor-advertising') ) {

                    var count = $('.floor-advertising').index('.floor');
                    OnePageMoveNav(i, count)
                } else {

                    OnePageMoveNav(i, $('.floor').length)
                }
            }
        });
    };

    function OnePageMoveNav(elIndex, lengthFloor) {

        $('.header__nav-item').removeClass('header__nav-item_active');
        $('.header__nav-item').eq(elIndex - 2).addClass('header__nav-item_active');
        
        if (elIndex > 1 && elIndex <= lengthFloor) {

            $('.header__nav').css('display', 'block');
        } else {

            $('.header__nav').css('display', 'none');
            return;
        }
        $('.header__nav-list').css({
            top: 42 - (21 * (elIndex - 1))
        });
    }
});