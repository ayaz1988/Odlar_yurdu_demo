$('.section_one .owl-carousel').owlCarousel({
    items: 1,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed: 2400,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



$('.section_three .owl-carousel').owlCarousel({
    items: 3,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed: 2400,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


var div = $('.scroll_header');

$(window).scroll(function () {

    if (920 < $(window).scrollTop()) {
        div.addClass('visible_nav').animate({top: '0'}, 800);

    }

    if (920 > $(window).scrollTop()) {
        //animates it out of view
        div.animate({top: '0'});
        //sets it back to default style
        setTimeout(function () {
            div.removeClass('visible_nav');
        });
    }
});


$('.section_five_slider_container .owl-carousel').owlCarousel({
    items: 3,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed: 2400,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


$(document).ready(function(){


    //----------Select the first tab and div by default

    $('#vertical_tab_nav > ul > li > a').eq(0).addClass( "selected" );
    $('#vertical_tab_nav > div > article').eq(0).css('display','block');


    //---------- This assigns an onclick event to each tab link("a" tag) and passes a parameter to the showHideTab() function

    $('#vertical_tab_nav > ul').click(function(e){

        if($(e.target).is("a")){

            /*Handle Tab Nav*/
            $('#vertical_tab_nav > ul > li > a').removeClass( "selected");
            $(e.target).addClass( "selected");

            /*Handles Tab Content*/
            var clicked_index = $("a",this).index(e.target);
            $('#vertical_tab_nav > div > article').css('display','none');
            $('#vertical_tab_nav > div > article').eq(clicked_index).fadeIn();

        }

        $(this).blur();
        return false;

    });


});


$('.section_seven_slider_container .owl-carousel').owlCarousel({
    items: 4,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed: 2400,
    nav:true,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


$(document).ready(function (){
    var akardion=$(".acardion_conten");
    akardion.find("p").css("display","none");
    akardion.click(function (){
        akardion.find("p").slideUp();
        $(this).find("p").slideToggle()
    })

})