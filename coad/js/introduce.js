$('.img_slide > div:gt(0)').hide();

setInterval(function(){
    $('.img_slide > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.img_slide');
},3000);