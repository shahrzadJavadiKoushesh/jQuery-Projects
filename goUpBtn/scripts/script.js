$(document).ready(function(){
    let topbtn = $('.top-btn');
    $(window).scroll(function(){
        if ($(window).scrollTop() > 200){
            topbtn.fadeIn();
        }
        else{
            topbtn.fadeOut();
        }
    });

    topbtn.click(function(){
        $('html').animate({
            scrollTop: 0
        }, 1000);
    });
});