
// Меню в хедере (актуальное/топ просмотров/поиск)
var beforeElem,
    afterElem;
$(document).on('click', '.header-main__item', function() {

    beforeElem = $(this);
    afterElem === undefined ? afterElem = 'none' : afterElem = afterElem;
    var openElem = $('.header-main__item_open');

    console.log(afterElem);
    toogleWidth(beforeElem, $('.header-main__item'), afterElem, openElem);

    afterElem = $(this);
});

function toogleWidth(thisEl, allEl, activeEl, openEl) {

    if(thisEl.hasClass('header-main__item_open') || thisEl.hasClass('header-main__item_active')) {

        firstClick(thisEl); // Первый клик по дефолтно открытому полю
    } else if(thisEl.hasClass('header-main__item_search')) {

        clickSearch(thisEl, allEl, activeEl, openEl); // Клик по полю поиска
    } else if (!thisEl.hasClass('header-main__item_open') && !thisEl.hasClass('header-main__item_active')) {

        firstAndNextClick(thisEl, allEl, activeEl, openEl); // Первый и последующие клики
    }
    setTimeout(function() { // удаляю клас not-active после конца анимации
        $('header-main__item_not-active').removeClass('header-main__item_not-active')
    }, 650);
}
$(document).on('click', '.header-main__items-close', function() {

    $('.header-main__item_for-tooltip').removeClass('header-main__item_for-tooltip');
    $(this).removeClass('header-main__items-close_open')
})

function firstClick(thisEl) {

    thisEl.addClass('header-main__item_for-tooltip');
    $('.header-main__items-close').addClass('header-main__items-close_open');
}
function clickSearch(thisEl, allEl, activeEl, openEl) {

    allEl.removeClass('header-main__item_for-tooltip');
    if(activeEl != 'none') { // если это первый клик по элементу то пропускаю шаг с добавлением класса "not-active" ранее активному элементу

        activeEl.addClass('header-main__item_not-active');
        activeEl.removeClass('header-main__item_active');
    } else {}
    thisEl.removeClass('header-main__item_not-active');
    thisEl.addClass('header-main__item_active');
    $('.header-main__items-close').removeClass('header-main__items-close_open');
}
function firstAndNextClick(thisEl, allEl, activeEl, openEl) {

    openEl.addClass('header-main__item_not-active');
    openEl.removeClass('header-main__item_open');
    allEl.removeClass('header-main__item_for-tooltip');
    if(activeEl != 'none') { // если это первый клик по элементу то пропускаю шаг с добавлением класса "not-active" ранее активному элементу

        activeEl.addClass('header-main__item_not-active');
        activeEl.removeClass('header-main__item_active');
    } else {}

    thisEl.removeClass('header-main__item_not-active');
    thisEl.addClass('header-main__item_active');
    setTimeout( function() {
        $('.header-main__item_active').addClass('header-main__item_for-tooltip');
        $('.header-main__items-close').addClass('header-main__items-close_open');
    }, 650);
}
