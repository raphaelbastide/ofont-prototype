$(window).scroll( function() {
    var value = $(this).scrollTop();
    if ( value > 30 )
        $("header").addClass('min');
    else
        $("header").removeClass('min');
});

$('.findLink').click(function(){
    var s = $('#search');
    s.addClass('enlight');
    setTimeout(function(){
        s.focus();
        s.removeClass('enlight');
    },100);
});