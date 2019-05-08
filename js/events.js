
$(window).on('scroll', function() {

    if($(this).scrollTop() > 1150) { // 1230 это при условии что у меня два ряда сниппетов а не три как в дизайне
        $('.main__show-more-wrap').children().last().addClass('main__settings-btn');
        $('.main__show-more-wrap').children().last().removeClass('main__settings-btn_fixed');
    } else { 
        $('.main__show-more-wrap').children().last().addClass('main__settings-btn_fixed')
        $('.main__show-more-wrap').children().last().removeClass('main__settings-btn');
    }
});