

// Увеличение textarea в зависимости от содержимого

var $heightElem = '',
    $lineHight = '';


$(document).on('keydown keyup keypress', 'textarea', function() {
    
    $heightElem = $(this).outerHeight(); // Получаем высоту элемента
    $lineHight = Number($(this).css('line-height').substr(0, 2)); // Получаем высоту строки, обрезаем "px" и преобразуем в число

    if (this.scrollHeight > $heightElem) {

        this.style.height = this.scrollHeight + "px";
    } else if (this.scrollHeight < $heightElem) {

        this.style.height = $heightElem - $lineHight + 'px';
    };
    clear($(this));


    // console.log($lineHight)
    // console.log($heightElem)
    // console.log(this.scrollHeight)
    // console.log('//')

});

function clear(elem) {

    // console.log('here')
    // console.log($(elem).val() <= 1)
    if ($(elem).val() <= 1) {
        elem.style.height = $(elem).css('min-height');
    }
}