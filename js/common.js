
$(document).on('click', '.window-login__pass-show', function() {

    $(this).toggleClass('window-login__pass-show_active')
    if ($(this).prev().attr('type') == 'password') {

        $(this).prev().attr('type', 'text')
    } else { $(this).prev().attr('type', 'password') }
});

$(document).on('click', '.window-login__submit', function() {

    $('.window-login__email, .window-login__pass').addClass('incorrect-value')
})

$(document).on('blur', '[data-login], [data-pass], [data-code], [data-restore]', function() {

    var login = $('[data-login]').val(),
        pass = $('[data-pass]').val(),
        code = $('[data-code]').val(),
        restore = $('[data-restore]').val()

    if (login != '' && pass != '' || code != '' || restore != '') {

        $('.window-login__submit').prop('disabled', false)
    } else { 
        $('.window-login__submit').prop('disabled', true)
        $('.window-login__email, .window-login__pass').removeClass('incorrect-value')
    }
});

//longread

$(document).ready(function() {
    $('.datepicker').each(function() {

        $(this).datepicker({
            showOtherMonths: true,
            minDate: 0
        });
    })
    $('.datepicker-num').each(function() {

        $(this).datepicker({
            showOtherMonths: true,
            dateFormat: 'dd.mm.yy',
            minDate: 0
        });
    })
    
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd M yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $.datepicker._checkOffset = function(_, offset){
        offset.top -= 37

        return offset
    };
    
    
});
function calendar(item) {


}
// Открытие/закртие тултипа + смена направления стрелки(chevron)
$(document).on('click', '[data-tooltip]', function() {

    if ($(this).next().hasClass('tooltip_open')) {

        $(this).next().toggleClass('tooltip_open');
        $(this).toggleClass('tooltip_rotate');
    } else {
        $('[data-tooltip]').next().removeClass('tooltip_open');
        $(this).next().toggleClass('tooltip_open');
        $(this).toggleClass('tooltip_rotate');
    }
});

// закрытие тултипа при клике на пустое место
$(document).on('click', '.tooltip__cls-area', function() {

    var elClass = $(this).parent().attr('class').replace(/ [\s\S]+/, '');

    $(this).parent().removeClass(elClass + '_open');
    $('.tooltip').prev().removeClass('tooltip_rotate');
});

// Появление меню у объекта лонгриа
$(document).ready( function() {
    $('.object').hover(function() {
        
        $(this).find('.object__content').find('.tooltip').toggleClass('tooltip_open');
    });
});

// Увеличение блока с картинкой на стр Лонгрида
$(document).on('click', '[data-img-size]', function() {

    $(this).closest('.object').toggleClass('object_big-image');
    $(this).toggleClass('tooltip__image-size_active');
});

$(document).on('click', '.gallery-item__content-descr', function() {

    $('.gallery-item__descr').toggleClass('gallery-item__descr_active');
    $(this).toggleClass('gallery-item__content-descr_active');
});

$(document).on('click', '.longread-social__item-select', function() {

    $(this).next().toggleClass('longread-social__item-material_open');
})

// Открытие выпадающего меню при клике на кнопку "создать материал" на стр bg-materials
$(document).on('click', '.longread-content__add-btn', function() {

    $(this).toggleClass('longread-content__add-btn_click');
    $('.longread-content__add-list').toggleClass('longread-content__add-list_open')
});

// Счетчик символов в заголовке и описании (Лонгрид, Новость)
$(document).on('keyup', '[data-count]', function() {

    var strLength = $(this).val().length,
        maxLength = $(this).attr('maxlength');

    $(this).parent().prev().children('[data-count-title]').text( maxLength - strLength );
});

// Открытие "Выресать/копировать/вставить" у объекта лонгрида
$(document).on('click', '[data-btn-more]', function() {

    var optList = $(this).parent().children('.object__controls-list');
    
    $(this).toggleClass('object__controls-btn_active');
    optList.toggleClass('object__controls-list_show');
});

// Автоувеличение textarea
$(document).on('input', '[data-area-autosize]', function(e) {

    $(this).css('min-height', $(this).css('line-height') + 5);

	this.style.height = '1px';
	this.style.height = (this.scrollHeight) + 'px'; 
});

// Заполнение полей из "tooltip"
$(document).on('click', '.tooltip__item, .tooltip__time-item', function() {

    var elem = $(this).parent().prev().children();

    if($(this).hasClass('tooltip__item_checkbox')) {

    } else if ($(this).hasClass('tooltip__item_news-more')) {

        addNewsStr($(this))
    } else if ($(this).attr('class') == 'tooltip__time-item' || ($(this).parent().hasClass('tooltip__list'))) {

        changeTime($(this))
    } else if ($(this).hasClass('tooltip__item_add-news')) {

        addNews($(this));
    } else {
        elem.text($(this).text().trim());
        elem.attr('class', elem.attr('class').replace(/ [\s\S]+/, ''));
        $('.tooltip__cls-area').trigger('click');
    }
});

// Заполняем Поля типа "Select"  при клике на пункт
$(document).on('change', '.tooltip__item_checkbox input', function() {

    console.log('work');
    var item = $(this),
        parent = $(this).parent().parent().prev().children();

    if( item.prop('checked') ) {
        parent.val( parent.val() + (item.parent().text().trim() + '; ') );
    } else {
        parent.val( parent.val().replace( (item.parent().text().trim() + '; '), '' ) )
    }
});

// Заполняем поля "Время анонса"
function changeTime(el) {
    
    var elem = el.parent().parent().prev().children();

    elem.text(el.text().trim());
    elem.attr('class', elem.attr('class').replace(/ [\s\S]+/, ''));
    $('.tooltip__cls-area').trigger('click')
    errorTime(el)
}
// Добавление ошибки на стр релиза
function errorTime(parent) {

    parent.parent().parent().parent().addClass('incorrect-value');
}

// slider
$(document).ready(function() {

    $('.slider').each(function() {
        var prev = $(this).parent().parent().find('.object__content-gallery-btn_prev'),
            next = $(this).parent().parent().find('.object__content-gallery-btn_next'),
            counter = $(this).parent().parent().find('.slick-count');
        $(this).slick({
            prevArrow: prev,
            nextArrow: next,
            infinite: false,
            fade: $(this).hasClass('slider-mobile') ? false : true,
            // centerMode: true,
            respondTo: '.slider'
        });
        $(this).on('afterChange', function(event, slick, slickCurrentSlide){
            counter.text(slickCurrentSlide + 1);
        });

        // $(this).hasClass('slider-mobile') ? $(this).slick({fade: false}) : $(this).slick({fade: true});
    });
});

// Подставляем точки в поля с датой
var startVal = '',
    endVal = '';

$(document).on('input', '[data-input-mask]', function() {
    
    datePatter($(this))
    startVal = $(this).val().length;

    if ($(this).val().length == 2 && startVal > endVal ) {

        $(this).val( $(this).val() + '.' );
    } else if ($(this).val().length == 5 && startVal > endVal ) {

        $(this).val( $(this).val() + '.' );
    }

    endVal = $(this).val().length;
});
// Заменяем все символы кроме Цифр и точек - пустотой
function datePatter(el) {

    el.val( el.val().replace(/[^0-9.]/g, '') )
}

// Класс для фильтров "От большего к меньшему" и наоборот

$(document).on('click', '[data-MinMax]', function() {
    
    var elClass = $(this).attr('class').replace(/ [\s\S]+/, '');
    $(this).toggleClass( elClass + '_active');
});

// Открываем меню на стр пользователся
$(document).on('click', '[data-menu]', function() {

    $(this).next().toggleClass('account-modal_open');
})

$(document).on('input', '[data-time-mask]', function() {
    
    timePatter($(this))
    startVal = $(this).val().length;

    if ($(this).val().length == 2 && startVal > endVal ) {

        $(this).val( $(this).val() + ':' );
    } else { false }

    endVal = $(this).val().length;
});
function timePatter(el) {

    el.val( el.val().replace(/[^0-9:]/g, '') )
};

$(document).on('click', '[data-replace-status]', function() {

    $(this).prev().prev().text('Готов к публикации');
});


// Поinказываем подсказку к паролю, стр добавления пользователя

$(document).on('focus', '[data-notice]', function() {

    $(this).parent().next().next().css('display', 'block');
});
$(document).on('blur', '[data-notice]', function() {

    $(this).parent().next().next().css('display', 'none');
});


// Показываем ошибки на стр добавить юзера

$(document).on('focus', '[data-error]', function() {

    $(this).parent().parent().addClass('incorrect-value');
});
$(document).on('blur', '[data-error]', function() {

    $(this).parent().parent().removeClass('incorrect-value');
});

// longread-announcement
// Показываю/скрываю блоки в зависимости от вкл/выкл инпута
$(document).on('click', '[data-anncounce]', function() {

    $(this).parent().parent().parent().toggleClass('longread-announcement_off');
});

// Вешаю/убираю disabled с кнопки "разместить" орентируясь на заполнение инпутов
$(document).on('input', '.longread-announcement__title, .longread-announcement__time-input, .longread-announcement__datepicker-input', function() {
    
    var date = $('.longread-announcement__title').val().length,
        time = $('.longread-announcement__time-input').val().length,
        title = $('.longread-announcement__datepicker-input').val().length;

    if( date > 0 && time > 0 && title > 0) {

        $('.longread-announcement__btn-upld').prop('disabled', false);
    } else { $('.longread-announcement__btn-upld').prop('disabled', true); }
});

// Показ ошибок при фокусе на инпуты
$(document).on('focus', '.longread-announcement__title-input, .longread-announcement__time-input, .longread-announcement__datepicker-input', function() {

    $(this).parent().parent().addClass('incorrect-value');
});
$(document).on('blur', '.longread-announcement__title-input, .longread-announcement__time-input, .longread-announcement__datepicker-input', function() {

    $(this).parent().parent().removeClass('incorrect-value');
});


// Модалка публикации стр лонгрид, смена подсказок и показ/скрытие выбора "даты/вермени"
$(document).on('click', '[data-announce-modal]', function() {

    var el = $(this).attr('data-id');
    
    $(this).closest('.public-material__wrap').children('p').css('display', 'none');
    $(this).closest('.public-material__wrap').children('p#' + el).css('display', 'block');
    el == 'time' ? $('.public-material__wrap_for-date').css('display', 'block') : $('.public-material__wrap_for-date').css('display', 'none')
});

// Добавление новости

$(document).on('click', '[data-add-news]', function() {

    var elemClone = $(this).next();
    elemClone.clone().appendTo('.create-social__news-wrap').removeClass('create-social__news-item_hide').insertBefore($(this));
});
$(document).on('click', '[data-del-news]', function() {

    $(this).parent().parent().remove();
});

function addNews(el) {

    var text = el.text();
    el.parent().prev().find('input').val(text);
    el.parent().prev().find('input').next().removeClass('create-social__news-clear_hide');
    el.parent().prev().removeClass('create-social__news-item_created');
    el.parent().remove();
};

// "Читайте так же"

function newsReadMore(el) {

    var from = el.children().html().search('<');
    
    // console.log(el.children().html().substring(from, 0))
    return el.children().html().substring(from, 0)

}
function addNewsStr(el) {

    var elem = el.parent().parent().prev().children()

    elem.text( newsReadMore(el) );
    elem.attr('class', elem.attr('class').replace(/ [\s\S]+/, ''));
    $('.tooltip__cls-area').trigger('click');
}