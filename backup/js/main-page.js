$(function() {
    var delaySlideMove = 900; // Если менять время тут, то и в файле "_main-floor.sass" строка 31, у класса ".floor"(transition), для равномерной смены слайдов
    // Отвечает за скорость смены слайдов и скорость переключения анимации

    var headerClass = false;
    var footerClass = false;
    var endBlackLogo = '';
    $('.header__item_menu').on('click', function() {
        footerTransform(footerClass = !footerClass);
        $('.header').toggleClass('header_menu-open');
        $('body').toggleClass('body-fixed');
        if($('.header').hasClass('header_background')) {
            $('.header').toggleClass('header_background');
            $('.header').toggleClass('header_black-image');
            headerClass = true;
        } else if (headerClass) {
            $('.header').toggleClass('header_background');
            $('.header').toggleClass('header_black-image');
            headerClass = false;
        };
    });
    function footerTransform(footerClass) {

        var activeIndex = $('.active').index('.floor');
        var footerIndex = $('.floor-footer').index('.floor');
        
        $('.floor-footer').toggleClass('floor-footer_fixed');
        if (footerClass && $(window).width() > 1440) {
            $('.floor-footer').css('top', 100 * activeIndex + 'vh');
        } else if ($(window).width() > 1440) { $('.floor-footer').css('top', 100 * footerIndex + '%'); };
    };

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

        endBlackLogo = $('.floor-advertising') ? $('.floor-advertising').offset().top : $('.floor-footer').offset().top;
        
        if ($(window).scrollTop() > $(window).height() && $(window).scrollTop() < endBlackLogo || $('.header').hasClass('header_background') ) {
            
            $('.header').addClass('header_black-image');
            $('.header').addClass('header_fade');
            changeNavScroll( $(window).scrollTop() )
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
        asNavFor: '.floor__slider',
        arrows: false,
        infinite: false,
        focusOnSelect: true
    })

    //Слайдер на "2м этаже"
    
    var countTop = 1,
        countDown = 1;
    $('.floor-two__slider_top').on('init', function(e, slick) {
        $('.floor-two__slider-prev_top').css('display', 'none')
    }).slick({
        prevArrow: $('.floor-two__slider-prev_top'),
        nextArrow: $('.floor-two__slider-next_top'),
        slidesToShow: 1,
        infinite: false
    });
    $('.floor-two__slider-next_top').on('click', function() {
        var elemLength = $('.floor-two__slider_top .floor-two__slider-item').length - 1;

        $('.floor-two__slider-prev_top').css('display', 'block');
        if (elemLength == countTop) {
            $('.floor-two__slider-next_top').css('display', 'none');
            countTop = countTop;
        } else if (elemLength > countTop) {
            countTop += 1;
            $('.floor-two__slider-next_top').css('display', 'block');
        }
    });
    $('.floor-two__slider-prev_top').on('click', function() {

        $('.floor-two__slider-next_top').css('display', 'block');
        if (countTop > 1) {

            countTop -= 1;
            $('.floor-two__slider-prev_top').css('display', 'block');
        } else if (countTop == 1 || countTop < 1) {
            
            countTop = 1;
            $('.floor-two__slider-prev_top').css('display', 'none');
        }
    });


    $('.floor-two__slider_down').on('init', function(e, slick) {
        $('.floor-two__slider-prev_down').css('display', 'none')
    }).slick({
        prevArrow: $('.floor-two__slider-prev_down'),
        nextArrow: $('.floor-two__slider-next_down'),
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.floor-two__slider-next_down').on('click', function() {
        var elemLength = $('.floor-two__slider_down .floor-two__slider-item').length - 3;

        $('.floor-two__slider-prev_down').css('display', 'block');
        if (elemLength == countDown) {
            $('.floor-two__slider-next_down').css('display', 'none');
            countDown = countDown;
        } else if (elemLength > countDown) {
            countDown += 1;
            $('.floor-two__slider-next_down').css('display', 'block');
        }
    });
    $('.floor-two__slider-prev_down').on('click', function() {

        $('.floor-two__slider-next_down').css('display', 'block');
        if (countDown > 1) {
            countDown -= 1;
            $('.floor-two__slider-prev_down').css('display', 'block');
        } else if (countDown == 1 || countDown < 1) {
            
            countDown = 1;
            $('.floor-two__slider-prev_down').css('display', 'none');
        }
    });

    // 3й и последующие этажы, до рекламы
    $('.floor-common__slider').each(function() {
    var commonCountTop = 2,
        commonCountBottom = 4,
        prev = $(this).prev().prev(),
        next = $(this).prev(),
        thisSlider = $(this),
        thisSliderItem = thisSlider.find('.floor-common__slider-item');

        $(this).on('init', function(e, slick) {
            prev.css('display', 'none');
            $(window).width() < 960 ? next.css('display', 'none') : next.css('display', 'block');
        }).slick({
            prevArrow: prev,
            nextArrow: next,
            slidesToShow: $(this).hasClass('floor-common__slider_top') ? 2 : 4,
            slidesToScroll: 1,
            infinite: false,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
        next.on('click', function() {
            if ($(window).width() > 960) {

                prev.css('display', 'block');
                if (thisSlider.hasClass('floor-common__slider_top') && commonCountTop <= thisSliderItem.length) {
                    commonCountTop += 1;
                };
                if (commonCountTop >= thisSliderItem.length && thisSlider.hasClass('floor-common__slider_top')) {
                    next.css('display', 'none')
                };
                if (thisSlider.hasClass('floor-common__slider_down') && commonCountBottom <= thisSliderItem.length) {
                    commonCountBottom += 1;
                };
                if (commonCountBottom >= thisSliderItem.length && thisSlider.hasClass('floor-common__slider_down')) {
                    next.css('display', 'none');
                };
            };
            
        });
        prev.on('click', function() {

            if ($(window).width() > 960) {

                next.css('display', 'block');
                if (thisSlider.hasClass('floor-common__slider_top') && commonCountTop > 2) {
                    commonCountTop -= 1;
                };
                if (commonCountTop <= 2 && thisSlider.hasClass('floor-common__slider_top')) {
                    prev.css('display', 'none');
                };
                if (thisSlider.hasClass('floor-common__slider_down') && commonCountBottom > 4) {
                    commonCountBottom -= 1;
                };
                if (commonCountBottom <= 4 && thisSlider.hasClass('floor-common__slider_down')) {
                    prev.css('display', 'none');
                };
            }
        })
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
                    testMoveNav(i, count)
                } else {

                    testMoveNav(i, $('.floor').length)
                }
            }
        });
    };

    function testMoveNav(elIndex, lengthFloor) {

        $('.header__nav-item').removeClass('header__nav-item_active');
        $('.header__nav-item').eq(elIndex - 2).addClass('header__nav-item_active');
        
        if (elIndex > 1 && elIndex <= lengthFloor) {

            $('.header__nav').css('display', 'block');
        } else {

            $('.header__nav').css('display', 'none');
            return;
        }
        console.log('TEST'); 
        $('.header__nav-list').css({
            top: 42 - (21 * (elIndex - 1))
        });
    }
});