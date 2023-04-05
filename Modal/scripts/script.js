$(document).ready(function(){
    $('.openModal').click(function(){
        $('.modal').fadeIn(500);
        $('.openModal').fadeOut();       
    });

    $('.modal .close').click(function(){
        $('.modal').fadeOut(500);
        $('.openModal').fadeIn();  
    })
});