// Создание элемента
$(document).on('click', '[data-add-category]', function() {

    $('.modal_add').css('display', 'flex');
});
$(document).on('click', '[data-create-category]', function() {

    var elemValue = $(this).parent().prev().find('input');

    if(errorValue(elemValue) == true) {

        createCategory(elemValue.val());
        $('.modal').trigger('click');
    } else { elemValue.parent().addClass('empty-area'); }
});

function createCategory(elName) {

    $('<div>', {

        class: 'category__item category__item_disabled',
        append: $('<label>', {
            class: 'category__item-switch',
            append: $('<input>', {
                type: 'checkbox',
                disabled: true
            })
            .add( $('<div>', {
                class: 'category__item-checkbox'
            }))
        })
        .add( $('<div>', {
            text: elName,
            class: 'category__item-text category__item-name'
        }))
        .add( $('<div>', {
            class: 'category__item-text category__item-material'
        }))
        .add( $('<button>', {
            class: 'category__item-del'
        }))
    }).appendTo('.category__wrap');
};