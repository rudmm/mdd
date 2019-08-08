function menu(){
    let scroll = $(window).scrollTop();
    let header = $('.header');
    if(scroll>0){
        header.addClass('active');
    }else{
        header.removeClass('active');
    }
}
$(window).scroll(function(){
    menu();
});