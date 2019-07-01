

// Открытие закрыти блоков со слайдерами



$(document).on('click', '.main__slider-menu-item', function() {

    if($(window).width() > 1280) {

        $(this).css('width', '960px').addClass('main__slider-menu-item_active');
        resetWidth(this, 960)
        $(this).find('.main__subslider-count').css('opacity', '1');
        $(this).find('.main__slider-menu-title').css({
            top: 'auto',
            left: '40px',
            bottom: '31px',
            transform: 'none'
        });
    } else if($(window).width() > 768) {

        $(this).css('height', '569px');
        resetHeight(this, 569)
        $(this).find('.main__subslider-count').css('opacity', '1');
        $(this).find('.main__slider-menu-title').css({
            top: 'auto',
            left: '30px',
            bottom: '31px',
            transform: 'none'
        });

    } else {
        
        $(this).css('height', '314px');
        resetHeight(this, 314)
        $(this).find('.main__subslider-count').css('opacity', '1');
        $(this).find('.main__slider-menu-title').css({
            top: '10px',
            left: 'auto',
            right: '15px',
            transform: 'none'
        });
    }
})
function resetHeight(el, height) {

    $('.main__slider-menu-item').not(el).css('height', 'calc((100% - ' + height + 'px) / 4)');
    $('.main__slider-menu-item').not(el).removeClass('main__slider-menu-item_active');
    $('.main__slider-menu-item').not(el).find('.main__subslider-count').css('opacity', '0');
    $('.main__slider-menu-item').not(el).find('.main__slider-menu-title').css({
        top: '',
        left: '',
        right: '',
        bottom:  '',
        transform: ''
    });
}
function resetWidth(el, width) {
    $('.main__slider-menu-item').not(el).css('width', 'calc((100% - ' + width + 'px) / 4)');
    $('.main__slider-menu-item').not(el).removeClass('main__slider-menu-item_active');
    $('.main__slider-menu-item').not(el).find('.main__subslider-count').css('opacity', '0');
    $('.main__slider-menu-item').not(el).find('.main__slider-menu-title').css({
        top: '',
        left: '',
        right: '',
        bottom:  '',
        transform: ''
    });
}