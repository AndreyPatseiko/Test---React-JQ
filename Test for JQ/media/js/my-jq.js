// увеличение по клику
$('.box').on('click', function() {
    var atrclass = $(this).attr('class');
    if (atrclass == 'box') {
        $(this).addClass('active');
        $('.box').each(function() {
            console.log('dfgd');
            if ($(this).attr('class') != 'box active') {
                $(this).css('display', 'none');
            }
        });
    } else {
        $('.box').fadeIn();
        $(this).removeClass('active');
    }
});
//проверка ввода
$('#input').on('input', function() {
    $('.box.active').removeClass('active');
    var searchText = $(this).val().toUpperCase();
    $('.box > h3').each(function() {
        var x = $(this).text().toUpperCase();
        var z = +(x.indexOf(searchText));

        if (z > -1) {
            $(this).parent().css('display', 'block');
            $('.notefind').css('display', 'none');
        } else {
            $(this).parent().css('display', 'none');

        };
        var find = $('.box:visible').length;
        console.log(find);
        if (!find) {
            $('.notefind').css('display', 'block');
        }

    });

});