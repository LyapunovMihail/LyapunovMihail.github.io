$(function() {

    $('.release-content__btn_change-type').on('click', function() {
        
        $('.release-content__btn_change-type').removeClass('release-content__btn_active');
        $(this).addClass('release-content__btn_active');

        if($(this).hasClass('release-content__btn_type-1')) {

            $('.release-content__section-wrap_top').addClass('release-content__section-wrap_type-1');
            $('.release-content__section-wrap_top').removeClass('release-content__section-wrap_type-2');
            $('.release-content__section-wrap_top').removeClass('release-content__section-wrap_type-3');
        } else if ($(this).hasClass('release-content__btn_type-2')) {

            $('.release-content__section-wrap_top').addClass('release-content__section-wrap_type-2');
            $('.release-content__section-wrap_top').removeClass('release-content__section-wrap_type-1');
            $('.release-content__section-wrap_top').removeClass('release-content__section-wrap_type-3');
        } else if ($(this).hasClass('release-content__btn_type-3')) {

            $('.release-content__section-wrap_top').addClass('release-content__section-wrap_type-3');
            $('.release-content__section-wrap_top').removeClass('release-content__section-wrap_type-1');
            $('.release-content__section-wrap_top').removeClass('release-content__section-wrap_type-2');
        }
    });

    $('.release-content__btn_snippet-type').on('click', function() {

        $('.release-content__btn_snippet-type').removeClass('release-content__btn_active');
        $(this).addClass('release-content__btn_active');

        if($(this).hasClass('release-content__btn_snippet-type-1')) {

            $('.release-snippet__wrap_type').addClass('release-snippet__wrap_type-1');
            $('.release-snippet__wrap_type').removeClass('release-snippet__wrap_type-2');
            $('.release-snippet__wrap_type').removeClass('release-snippet__wrap_type-3');
        } else if ($(this).hasClass('release-content__btn_snippet-type-2')) {

            $('.release-snippet__wrap_type').addClass('release-snippet__wrap_type-2');
            $('.release-snippet__wrap_type').removeClass('release-snippet__wrap_type-1');
            $('.release-snippet__wrap_type').removeClass('release-snippet__wrap_type-3');
        } else if ($(this).hasClass('release-content__btn_snippet-type-3')) {

            $('.release-snippet__wrap_type').addClass('release-snippet__wrap_type-3');
            $('.release-snippet__wrap_type').removeClass('release-snippet__wrap_type-1');
            $('.release-snippet__wrap_type').removeClass('release-snippet__wrap_type-2');
        }
    });

    $('.advertising-item__switch').on('click', function() {

        $(this).children('input').prop('checked') ? $(this).children('input').prop('checked', false) : $(this).children('input').prop('checked', true);
        $(this).children('input').prop('checked') ? $(this).parent().removeClass('advertising-item_off') : $(this).parent().addClass('advertising-item_off')
    });

    $('.advertising-item__video-btn').on('click', function() {
        
        $('.advertising-item__video').toggleClass('advertising-item__video_active');
    });
});