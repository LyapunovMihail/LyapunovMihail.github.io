

// Увеличение textarea в зависимости от содержимого

var $heightElem = '',
    $lineHight = '';


$(document).on('keydown keyup keypress', 'textarea', function nameM() {
    
    $heightElem = $(this).outerHeight(); // Получаем высоту элемента
    $lineHight = Number($(this).css('line-height').substr(0, 2)); // Получаем высоту строки, обрезаем "px" и преобразуем в число

    if (this.scrollHeight > $heightElem) {

        this.style.height = this.scrollHeight + "px";
    } else if (this.scrollHeight < $heightElem) {

        this.style.height = $heightElem - $lineHight + 'px';
    };
    clear($(this));
});

function clear(elem) {

    // Обнуляю поле по минимальной высоте, при полном удалении всех строк из textarea
    if (elem.val() == '') {
        elem.css('height', elem.css('min-height'));
    } return false
}

$(document).ready( function () {

    setTimeout( function() {  
        // Если не установить задержку, js не успеет получить правильные значения scrollHeight
        // и из-за этого textarea увеличится некорректно

        var $textarea = $('textarea');
    
        for(var i = 0; i < $textarea.length; i++){

            autosizeSec($textarea[i], $($textarea[i]));
        }
    }, 500)

});

function autosize(js, jq) {
    
    var scrH  = js.scrollHeight,
        lineH = sum(jq, 'line-height'),
        padd = sum(jq, 'padding-top') + sum(jq, 'padding-bottom');

    jq.css('height', (lineH * Math.floor(scrH / lineH) + padd) ); // Получаю примерное кол-во строк путем деления scrollHeight на line-height + padding(top, bottom) и выставляю это значение в виде высоты textarea

    autosizeSec(js, jq); // вызываю другую функцию для выравниваня высот textarea
}

function sum(el, style) { // Возвращает число обрезая "рх"

    return Number(el.css(style).substr(0, 2))
}

function autosizeSec(js, jq) {

    $heightElem = jq.outerHeight();
    $lineHight = sum(jq, 'line-height');

    if (js.scrollHeight > $heightElem) {

        js.style.height = js.scrollHeight + "px";
    } else if (js.scrollHeight < $heightElem) {

        js.style.height = $heightElem - $lineHight + 'px';
    };
}