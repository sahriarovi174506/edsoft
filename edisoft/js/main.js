(function ($) {
    "use strict";

    // ------- Prealoder ------
    $(window).on('load', function () {
        $("#preloader").delay(300).fadeOut("slow");
    });


    // Handle Menu on Sreen scrolling
    function MenuOnScrol() {
        const elementToModify = document.querySelector(".site_header");
        let lastScrollTop = 0;
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY || window.pageYOffset;
            if (scrollTop > lastScrollTop && lastScrollTop > 200) {
                elementToModify.classList.add("sticky");
            } else if (lastScrollTop < 210) {
                elementToModify.classList.remove("menu_up");
                elementToModify.classList.remove("sticky");
            } else {
                elementToModify.classList.remove("menu_up");
            }
            if (scrollTop > lastScrollTop) {
                elementToModify.classList.add("menu_up");
            }
            lastScrollTop = scrollTop;
        });
    }


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').addClass("topbtn_hide");
        } else {
            $('.back-to-top').removeClass("topbtn_hide");
        }
    });
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);


        // Menu Hide
        MenuOnScrol()
    });


    $(document).ready(function () {

        // header scroling
        MenuOnScrol()


        // Toggle Menu
        $('.navbar-toggler').click(function (e) {
            $('.navbar-collapse').toggleClass("show");
            setTimeout(function () {
                $('.navbar-collapse').toggleClass('fadein');
            }, 200);
            $(this).toggleClass("active");
            $('header').toggleClass("active");
        });



        $('.tabslider').owlCarousel({
            rtl: false,
            navText: ['<img src="./img/arrow_left.svg" alt="arrow_left">', '<img src="./img/arrow_right.svg" alt="arrow_right">'],
            dots: false,
            items: 1,
            loop: false,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true, // Pause on hover
            margin: 40,
            responsive: {
                0: {
                    items: 1, // Number of items to show on small screens
                    margin: 25,
                },
                767: {
                    items: 1, // Number of items to show on screens larger than 600px
                    margin: 25,
                },
                1000: {
                    items: 1, // Number of items to show on screens larger than 1000px
                }
            }
        });


        $('.UniqueSlider').owlCarousel({
            rtl: false,
            navText: ['<img src="./img/arrow_left.svg" alt="arrow_left">', '<img src="./img/arrow_right.svg" alt="arrow_right">'],
            dots: false,
            items: 2,
            loop: false,
            autoplay: false,
            autoplayTimeout: 3000,
            autoplayHoverPause: true, // Pause on hover
            margin: 40,
            responsive: {
                0: {
                    items: 1, // Number of items to show on small screens
                    margin: 25,
                },
                767: {
                    items: 1, // Number of items to show on screens larger than 600px
                    margin: 25,
                },
                1000: {
                    items: 2, // Number of items to show on screens larger than 1000px
                }
            }
        });



    });

})(jQuery);