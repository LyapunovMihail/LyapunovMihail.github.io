
$(document).on('click', '[data-add-elem]', function() {

    $('.modal_add').css('display', 'flex');
});
$(document).on('click', '.modal', function(e) {
    var el = $(this);
    if (el.is(e.target) && el.has(e.target).length === 0) {
        el.css('display', 'none'); 
        clear($(this).find('input'));
	}
});
$(document).on('click', '.heading-modal__btn-cnsl', function() {

    $('.modal').css('display', 'none');
    console.log($(this).parent().parent().find('input'));
    
    clear($(this).parent().parent().find('input'));
});

function clear(el) {

    clearCount(el); // очищаем счетчик
    clearEmpty(el); // очищаем класс ошибки
    return el.val('');
};
function clearCount(el) {

    el.parent().prev().children().text(el.attr('maxlength'));
};
function clearEmpty(el) {
    el.parent().parent().removeClass('empty-area');
}

// Создание элемента

$(document).on('click', '[data-create-elem]', function() {

    var elem = $(this).parent().prev().find('input');

    if(errorValue(elem) == true) {

        createElement(elem.val());
        $('.modal').trigger('click');
        elem.parent().removeClass('empty-area');
    } else {
        elem.parent().addClass('empty-area');
    }
});

function createElement(elName) {
    
    $('<div>', {

        class: 'heading__item heading__item_disabled',
        append: $('<div>', {
            class: 'heading__item-wrap',
            append: $('<button>', {
                class: 'heading__item-btn heading__item-btn_down',
                'data-down': ''
            })
            .add( $('<button>', {
                class: 'heading__item-btn heading__item-btn_up',
                'data-up': ''
            }))
        })
        .add( $('<label>', {
            class: 'heading__item-switch',
            append: $('<input>', {
                type: 'checkbox',
                disabled: true
            })
            .add( $('<div>', {
                class: 'heading__item-checkbox'
            }))
        }))
        .add( $('<div>', {
            text: elName,
            class: 'heading__item-text heading__item-name'
        }))
        .add( $('<div>', {
            class: 'heading__item-text heading__item-views'
        }))
        .add( $('<div>', {
            class: 'heading__item-text heading__item-material'
        }))
        .add( $('<button>', {
            class: 'heading__item-del'
        }))
    }).appendTo('.heading__wrap');
};

// Перенос элементов "Вверх/Вниз"
var changePosition = '';
$(document).on('click', '[data-down], [data-up]', function() {

    $('.modal_pos').css('display', 'flex');
    changePosition = $(this);
});
$(document).on('click', '[data-change-pos]', function() {

    changePosition.attr('data-down') === undefined ? upElem( changePosition.parent().parent() ) : downElem( changePosition.parent().parent() )
})
function downElem(elMove) {

    elMove.next().after(elMove);
    $('.modal').trigger('click');
};
function upElem(elMove) {

    elMove.prev().before(elMove);
    $('.modal').trigger('click');
};

// disabled/active элементов
var elemActive = '';
$(document).on('click', '.heading__item-switch, .category__item-switch', function() {

    // $(this).prop('checked') ? $(this).parent().parent().removeClass('heading__item_disabled') : $(this).parent().parent().addClass('heading__item_disabled')
    elemActive = $(this).children('input');
});
$(document).on('click', '.heading__item-switch, .category__item-switch', function() {

    if( $(this).children('input').prop('checked')) {

        $('.modal_switch-off').css('display', 'flex');
    } else {

        $('.modal_active').css('display', 'flex');
    }
});
$(document).on('click', '[data-active], [data-deactivate]', function() {

    var classEl = elemActive.parent().parent().attr('class').replace(/ [\s\S]+/, '');
    if($(this).attr('data-active') === undefined) {

        elemActive.prop('checked', false);
        elemActive.parent().parent().addClass(classEl + '_disabled');
        $('.modal').trigger('click');
    } else {
        console.log(classEl);
        elemActive.prop('checked', true);
        elemActive.parent().parent().removeClass(classEl + '_disabled');
        $('.modal').trigger('click');
    }
});

// Удаление элементов

var delItem = '';
$(document).on('click', '.heading__item-del, .category__item-del', function() {

    $('.modal_delete').css('display', 'flex');
    delItem = $(this).parent();
});
$(document).on('click', '[data-delete]', function() {

    delItem.remove();
    $('.modal').trigger('click');
});

// Переименование Рубрики

var renameItem = '';
$(document).on('click', '.heading__item-name, .category__item-name', function() {

    $('.modal_rename').css('display', 'flex');
    renameItem = $(this);
});
$(document).on('click', '[data-rename]', function() {

    var objectName = $(this).parent().prev().find('input');

    if(errorValue(objectName) == true) {

        renameItem.text( objectName.val() );
        $('.modal').trigger('click');
    } else { $(this).parent().prev().addClass('empty-area'); }
});


// Сохранить изменения

$(document).on('click', '[data-save]', function() {

    $('.modal_save').css('display', 'flex');
})

// Ошибка при пустом поле

function errorValue(elem) {

    return elem.val().length > 0 ? true : false;
}