$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    dots : true,
    //autoplay: true,
    mouseDrag: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
    // autoplayHoverPause : true,        

        })
});
