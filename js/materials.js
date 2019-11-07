
$(document).on('click', '.admin-main__head-add', function() {

    $('.admin-main__head-create').toggleClass('admin-main__head-create_active');
});

$(document).on('click', '.admin-main__filter-item', function(e) {

    var div = $(this).children('.admin-main__select')
    
    if (div.has(e.target).length === 0 && div.hasClass('admin-main__select_active')) {
        div.removeClass('admin-main__select_active');
    } else {
        div.addClass('admin-main__select_active');
        $('.admin-main__filter-item').not(this).children('.admin-main__select').removeClass('admin-main__select_active');
    }
});

$(document).on('click', '.admin-aside__item', function() {

    var elem = $('.admin-aside__item');

    elem.not(this).removeClass('admin-aside__item_active admin-aside__item_open')
    $(this).addClass('admin-aside__item_active admin-aside__item_open');

    $('.admin-aside__menu').addClass('admin-aside__menu_open')
})

$(document).on('click', '.admin-aside__menu_cls-area', function() {

    $('.admin-aside__menu').removeClass('admin-aside__menu_open');
    $('.admin-aside__item').removeClass('admin-aside__item_open');
});

$(document).on('click', '[data-loading]', function() {

    var elClass = $(this).attr('class').replace(/ [\s\S]+/, '')
    
    $('[data-loading]').addClass(elClass + '_loading');
    setTimeout(function() {

        clsLoad()
    }, 3000);
});

function clsLoad() {

    var elClass = $('[data-loading]').attr('class').replace(/ [\s\S]+/, '')

    $('[data-loading]').removeClass(elClass + '_loading');
}

// Заполнение дат
$(document).on('change', '[data-end]', function() {

    var itemLength = $(this).attr('maxlength');
        startVal = $(this).prev('input').val()
        endVal = $(this).val();

    if( startVal.length == itemLength && endVal.length == itemLength) {

        addDate(startVal, endVal, $(this));
    } else { false }
});

function addDate(startText, endText, elem) {

    var elClass = $('[data-paste]').attr('class').replace(/ [\s\S]+/, '');

    // $('[data-paste]').text('Дата создания ' + startText + '-' + endText );
    // $('[data-paste]').removeClass(elClass + '_placeholder');
    // $('[data-paste]').parent().addClass('admin-main__filter-item_not-empty');

    elem.parent().parent().prev().children().text( 'Дата создания ' + startText + '-' + endText );
    elem.parent().parent().prev().children().removeClass( elClass + '_placeholder' );
    elem.parent().parent().prev().addClass('admin-main__filter-item_not-empty');
}