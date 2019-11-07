$(function() {

// общее
	var desktop = window.matchMedia('(min-width: 960px)').matches;

	var date = new Date();
	var month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
	month = month[date.getMonth()];
	var day = String(date.getDate()) + ' ' + month;
	var hours = String(date.getHours()).replace(/\b(\d{1})\b/g, '0$1');
	var minutes = String(date.getMinutes()).replace(/\b(\d{1})\b/g, '0$1');
	var time = String(hours + ':' + minutes);

// header
	var beforeElem,
		afterElem;
	$('.header__item').not('.header__item_menu').on('click', function(e) {

		beforeElem = $(this);
		afterElem === undefined ? afterElem = 'none' : afterElem = afterElem;
		var openElem = $('.header__item_open');

		if ($(this).has(e.target).length === 0 ) {

			toogleWidth(beforeElem, $('.header__item'), afterElem, openElem);
		};

		afterElem = $(this);
	});
	$('.header__item_menu').on('click', function() {
		
		console.log('menu test');
		console.log($('body').hasClass('.body-fixed'));
		$('body').hasClass('body-fixed') ? fixedBody() : unFixedBody(Number( $('body').css('top').slice(0, -2) ));
	});

	function toogleWidth(thisEl, allEl, activeEl, openEl) {

		if(thisEl.hasClass('header__item_open') || thisEl.hasClass('header__item_active')) {
	
			firstClick(thisEl); // Первый клик по дефолтно открытому полю
		} else if (!thisEl.hasClass('header__item_open') && !thisEl.hasClass('header__item_active')) {
			
			firstAndNextClick(thisEl, allEl, activeEl, openEl); // Первый и последующие клики
		}
		setTimeout(function() { // удаляю класс not-active после конца анимации
			$('header__item_not-active').removeClass('header__item_not-active')
		}, 650);
	}
	$('.header__items-close, .header__tooltip-cls').on('click', function() { // закрытие по клику на темное поле или кнопку
	
		unFixedBody( Number( $('body').css('top').slice(0, -2) ) );
		$('.header__item_for-tooltip').removeClass('header__item_for-tooltip');
		$('.header__items-close').removeClass('header__items-close_open');
		$('body').removeClass('body-fixed');
	})

	function firstClick(thisEl) {

		thisEl.addClass('header__item_for-tooltip');
		$('.header__items-close').addClass('header__items-close_open');
		$('body').addClass('body-fixed');
		fixedBody();
	}
	function firstAndNextClick(thisEl, allEl, activeEl, openEl) {

		openEl.addClass('header__item_not-active');
		openEl.removeClass('header__item_open');
		allEl.removeClass('header__item_for-tooltip');
		if(activeEl != 'none') { // если это первый клик по элементу то пропускаю шаг с добавлением класса "not-active" ранее активному элементу

			activeEl.addClass('header__item_not-active');
			activeEl.removeClass('header__item_active');
		} else {}

		thisEl.removeClass('header__item_not-active');
		thisEl.addClass('header__item_active');
		fixedBody();
		setTimeout( function() {
			$('.header__item_active').addClass('header__item_for-tooltip');
			$('.header__items-close').addClass('header__items-close_open');
			$('body').addClass('body-fixed');
		}, $(window).width() > 960 ? 650 : 0);
	}

	$('.header__tooltip-filter li').on('click', function() {

		$('.header__tooltip-filter li').removeClass('header__tooltip-filter_active');
		$(this).addClass('header__tooltip-filter_active');
	});

    function fixedBody() {
        var bodyTop = $(window).scrollTop();
        if ($(window).width() < 960) {

            $('body').css({
                top: bodyTop * (-1),
                position: 'fixed',
                left: '0',
                right: '0',
                bottom: '0'
            })
        }
    };
    function unFixedBody(topBody) {

		console.log(topBody);

        if ($(window).width() < 960) {

            $('body').css({
                top: '',
                position: '',
                left: '',
                right: '',
                bottom: ''
			});
			$(window).scrollTop(topBody * (-1));
        }
    };

// head-box
	if (desktop && $('.head-box').length > 0) {
		let widthLink = $('#currentNavLink').outerWidth(true)/2;
		let widthLogo = $('.header__logo').width();
		$('.head-box__triangle').css('left', $('#currentNavLink').position().left + widthLink + widthLogo);

		$(window).on('resize', function() {
			$('.head-box__triangle').css('left', $('#currentNavLink').position().left + widthLink + widthLogo);
		});
	}

	$('.head-box__sort-toggle').click(function() {
		$('.head-box__sort-toggle').removeClass('head-box__sort-toggle--active');
		$('.head-box__sort-order').prop('disabled', true);
		$(this).addClass('head-box__sort-toggle--active');
		$(this).next().prop('disabled', false);
	});

	$('.head-box__sort-order').click(function() {
		$(this).toggleClass('head-box__sort-order--up');
	});

	$('.head-box__button-grid').click(function() {
		$('.head-box__button-list').removeClass('head-box__button-list--active');
		$('.head-box__button-list').prop('disabled', false);
		$(this).addClass('head-box__button-grid--active');
		$(this).prop('disabled', true);
		$('.main-grid').fadeOut(0);
		$('.main-grid').removeClass('main-grid--list');
		$('.main-grid').fadeIn();
	});

	$('.head-box__button-list').click(function() {
		$('.head-box__button-grid').removeClass('head-box__button-grid--active');
		$('.head-box__button-grid').prop('disabled', false);
		$(this).addClass('head-box__button-list--active');
		$(this).prop('disabled', true);
		$('.main-grid').fadeOut(0);
		$('.main-grid').addClass('main-grid--list');
		$('.main-grid').fadeIn();
	});

// top-views
	$('.top-views__list').hide();
	$('.top-views__list:first').show();
	$('.top-views__tab:first').addClass('top-views__tab--active');
	$('.top-views__tab').click(function(event) {
		event.preventDefault();
		if (!$(this).hasClass('top-views__tab--active')) {
			$('.top-views__tab').removeClass('top-views__tab--active');
			$(this).addClass('top-views__tab--active');
			$('.top-views__list').hide();
			var selectTab = $(this).find('a').attr("href");
			$(selectTab).fadeIn();
		}
	});

// tape-time
	var tapeTimeNow =  $('.tape-time__item--now');
	var tapeTimeNowIndex = tapeTimeNow.index('.tape-time__item');
	tapeTimeNowTime = tapeTimeNow.find('.tape-time__item-time');
	tapeTimeNowTime.data('day', day);
	tapeTimeNowTime.text(time);

	$('.tape-time__row').slick({
		prevArrow: $('.tape-time__arrow--prev'),
		nextArrow: $('.tape-time__arrow--next'),
		infinite: false,
		slidesToShow: 5,
		initialSlide: tapeTimeNowIndex,
		centerMode: true,
		swipe: false,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});

	$('.tape-time__row').on('afterChange', function(event, slick, currentSlide){
		var timeElem = $('.tape-time__item').eq(currentSlide).find('.tape-time__item-time');
		$('.header__datetime').text(timeElem.data('day') + ' ' + timeElem.text());
	});

// material-group
	$('.material-group').each(function(i, item) {
		var slider = $(item).find('.material-group__slider');
		$(item).find('.material-box').each(function(j, jtem) {
			slider.append($(jtem).clone());
		});
	});

	$('.material-group__slider').slick({
		infinite: false,
		arrows: false
	});

// material-slider
	$('.material-slider').each(function(i, item) {
		var slider = $(item).find('.material-slider__list');
		slider.slick({
			prevArrow: $('.material-slider__arrow--prev'),
			nextArrow: $('.material-slider__arrow--next'),
			fade: true,
			responsive: [
				{
					breakpoint: 450,
					settings: {
						fade: false
					}
				}
			]
		});

		$(item).find('.material-slider__counter-all').text($(item).find('.material-slider__item').length);

		/* обработчик для счетчика висит на двух событиях потому что: 
		1.) обработчик смены слайда работает не сразу, а после
		2.) обработчик нажатия стрелок не срабатывает при свайпе */
		$(item).find('.material-slider__arrow').click(function() {
			$(item).find('.material-slider__counter-current').text(slider.slick('slickCurrentSlide') + 1);
		});

		$(item).find('.material-slider__list').on('afterChange', function() {
			$(item).find('.material-slider__counter-current').text(slider.slick('slickCurrentSlide') + 1);
		});
	});

// material-cat
	$('.material-cat__button').click(function() {
		$(this).toggleClass('material-cat__button--active');
		$(this).parents('.material-cat').find('.material-cat__text').fadeToggle(200);
	});

// material-text
	$('.material-text mark').click(function() {
		$(this).find('span').toggle()
	});

// scroll-container
	function scrollContainer() {
		var parent = $('.scroll-container');
		var clickToggle = false;

		$('.scroll-container__toggle').click(function() {
			parent.toggleClass('scroll-container--social-open');
			$('.scroll-container__social-list').fadeToggle(200);
			clickToggle = true;
		});

		$('.scroll-container__up').click(function() {
			$('html, body').animate({ scrollTop: 0 }, 1000);
		});

		var offset = parent.offset().top - 95;
		var inner = parent.find('.scroll-container__inner');
		height = inner.height();
		var max = parent.height() - height;
		
		var a = 40; // нижний margin контейнера
		var b = 95; // top фиксированного блока
		// $(window).scroll(function() {
		// 	var x = $(window).scrollTop();
		// 	var max = parent.height() - height - a; // пришлось получать это значение в обработчике скролла, так как высота родителя высчитывается некорректно при загрузке страницы, так как не загружены виджет твиттера и изображения, проблема не решилась с помощью $(window).load
		// 	var top = x - offset + b;
		// 	if (top < 0 + b) {
		// 		inner.css({
		// 			'position': 'absolute',
		// 			'top': 0
		// 		});
		// 		if (!clickToggle) {
		// 			parent.addClass('scroll-container--social-open');
		// 			$('.scroll-container__social-list').fadeIn(200);
		// 		}
		// 	}
		// 	else if (top > max + b) {
		// 		inner.css({
		// 			'position': 'absolute',
		// 			'top': 'auto',
		// 			'bottom': a + 'px'
		// 		});
		// 		if (!clickToggle) {
		// 			parent.addClass('scroll-container--social-open');
		// 			$('.scroll-container__social-list').fadeIn(200);
		// 		}
		// 	}
		// 	else {
		// 		inner.css({
		// 			'position': 'fixed',
		// 			'top': b + 'px',
		// 			'bottom': 'auto'
		// 		});
		// 		if (!clickToggle) {
		// 			parent.removeClass('scroll-container--social-open');
		// 			$('.scroll-container__social-list').fadeOut(200);
		// 		}
		// 	}
		// });
	}
	
	if (desktop && $('.scroll-container').length > 0) {
		scrollContainer();
	}

// main-grid
	$('.main-grid__col-button .button').click(function() {
		$(this).addClass('button--loading').prop('disabled', true);
	});

// footer
	$('.footer__submit').click(function() {
		if ($('.footer__input-email').val() == '') {
			$('.footer__input-email').addClass('footer__input-email--validate');
		}
	});

//paralax

	if( $(window).width() > 960) {

		$('.material-head__image_parallax').imageScroll({
			coverRatio: 1,
			holderClass: 'image-Holder',
			speed: 0
		});
	};

});