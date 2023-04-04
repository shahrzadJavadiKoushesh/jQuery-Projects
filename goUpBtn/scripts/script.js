$(document).ready(function(){
    let topbtn = $('.top-btn');
    $(window).scroll(function(){
        if ($(window).scrollTop() > 100){
            topbtn.fadeIn();
        }
        else{
            topbtn.fadeOut();
        }
    });
});