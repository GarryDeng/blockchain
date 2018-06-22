$(document).on('scroll',function(){
    if($(this).scrollTop() !== 0) {
        $('.max-width-menu .logo').addClass('active-logo');
    } else if ($(this).scrollTop() === 0) {
        $('.max-width-menu .logo').removeClass('active-logo');
    }
})