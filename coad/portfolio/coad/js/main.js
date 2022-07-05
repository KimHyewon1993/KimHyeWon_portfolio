

function mobile(){
    let navWidth = $('nav').width();
    $('nav').css({'left' : -navWidth-30});


    $('.navBtn').on('click',function(){
  
        $('nav').stop().animate({'left':0})
    }); //Nav open
    
    $('.close').on('click',function(){
        let navWidth2 = $('nav').width();
        $('nav').stop().animate({'left' : -navWidth2-30});
    }); //Nav close


}

function pc(){
    $('nav').css({left:0});

}

function common(){

/**************gallary*************/

$('.gallItems').on('click',function(e){

    e.preventDefault();

    let img = $(this).find('figure').html();
    let titTxt = $(this).find('h4').text();
    let conTxt = $(this).find('p').text();

    $('.view').stop().fadeIn();
    $('.viewPic').html(img);
    $('.view h4').text(titTxt);
    $('.view p').text(conTxt);
});

$('.viewX, .bgClose').on('click',function(){
    $('.view').fadeOut();
}); //view Close
}//common


function responsive(){
    
let winWidth = $(window).width();
if(winWidth <= 760){
    mobile()
}else{
    pc()
}
}//responsive

responsive();
common();

$(window).on('resize',responsive);



