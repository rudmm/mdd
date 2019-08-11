function menu(){
    let scroll = $(window).scrollTop();
    let header = $('.header');
    if(scroll>0){
        header.addClass('active');
    }else{
        header.removeClass('active');
    }
}

function clickBurger(){
    let btn = $('.btn-menu');
    let navbar = $('.nav-bar');
    btn.click(function(){
        $(this).toggleClass('open');
        navbar.slideToggle();
    });
}
$(window).scroll(function(){
    menu();
});
$(document).ready(function(){
    clickBurger();
});