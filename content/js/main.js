$("#land nav > div").unbind("click").click(function(){
    $(this).find("a")[0].click();
});
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});