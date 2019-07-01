
// Открытие окна "Подбор по параметрам"
$(document).on('click', '[data-open-up]', function() {
    
    if($('.main__filter').css('top') == '216px') {
        
        $(this).css('top', '-74px');
        $('.main__filter-btn_corpus').css('opacity', '0')
        $('.main__filter-btn_param').css('opacity', '1')
        $('.main__filter').css('top', '100%');
        $(window).scrollTop(0);
        $('body').css('overflow', 'hidden');
    } else {

        $(this).css('top', '-40px');
        $('.main__filter').css('top', '216px');
        $('body').css('overflow', 'visible');
        $('.main__filter-btn_param').css('opacity', '0')
        $('.main__filter-btn_corpus').css('opacity', '1')
    }
});


// Следим за чекбоксами в окне выбора корпуса :

$(document).on('click', '[data-check]#corpusAll', function() {

    console.log('Ola!')

    if($('[data-check]#corpusAll').prop('checked')) {
        $('[data-check]').prop('checked', true);
    } else {
        $('[data-check]').prop('checked', false);
    }
});

// Кнопка "наверх"

// Появление:
$(window).on('scroll', function() {

    var $show = $('.main__filter-result').offset().top;

    if($(this).scrollTop() > $show) {

        $('[data-btn-up]').css('display', 'block');
    } else {
        $('[data-btn-up]').css('display', 'none');
    }
});

// Скролл к верху
$(document).on('click', '[data-btn-up]', function() {

    var $up = $('.main__filter-options').offset().top - 40 // Где 40 это значание на которое выходит кнопка из-за границы

    $(window).scrollTop($up);
});



// Фильтр на мобилках

// Появление: 

$(document).on('click', '[data-show-filter]', function() {

    if($('.main__filter-options').css('display') == 'none') {

        $('.main__filter-options').css({
            display: 'flex',
            left: '0%'
        });
        addBtn();
        $('body').css('overflow', 'hidden');
    } else {
        $('.main__filter-options').css('left', '');
        $('body').css('overflow', '');
        removeBtn();
        setTimeout(function() {
            $('.main__filter-options').css('display', '');
        }, 300);
    }
});
function addBtn() {

    $('[data-show-filter]').addClass('main__filter-show-filter_success')
}
function removeBtn() {

    $('[data-show-filter]').removeClass('main__filter-show-filter_success')
}


// Поле фильтра, добавляем - удаляем - меняем стрелку и ее направление

$(document).on('click', '.filter-result__filter-item', function() {

    if($(this).hasClass('filter-result__filter-item_active-down')) {

        changeClass($(this), 'filter-result__filter-item_active-up', 'filter-result__filter-item_active-down')
    } else if($(this).hasClass('filter-result__filter-item_active-up')) {

        changeClass($(this), 'filter-result__filter-item_active-down', 'filter-result__filter-item_active-up')
    } else {

        $(this).addClass('filter-result__filter-item_active-down');
        $('.filter-result__filter-item').not(this).removeClass('filter-result__filter-item_active-down');
        $('.filter-result__filter-item').not(this).removeClass('filter-result__filter-item_active-up');
    }
});

function changeClass(el, add, remove) {

    el.addClass(add);
    el.removeClass(remove);
}

