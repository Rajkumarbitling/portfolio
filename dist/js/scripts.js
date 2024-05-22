/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2024 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    (() => {
        var startDate = new Date('February 1, 2019');
        // Get the current date
        var currentDate = new Date();

        // Calculate the difference in milliseconds
        var timeDifference = currentDate - startDate;

        var years = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
        var remainingMilliseconds = timeDifference % (365.25 * 24 * 60 * 60 * 1000);
    
        var months = Math.floor(remainingMilliseconds / (30.44 * 24 * 60 * 60 * 1000));
        remainingMilliseconds %= (30.44 * 24 * 60 * 60 * 1000);
    
        var days = Math.floor(remainingMilliseconds / (24 * 60 * 60 * 1000));

        const experience = document.body.querySelector('#experiencePeriod');
        if (experience) {
            experience.innerHTML = `${years} Years ${months} ${months > 1 ? 'Months' : 'Month'} ${days} ${days > 1 ? 'Days' : 'Day'}`;
        }
    })()

    // corousel slide

    var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: false,
        mousewheel: {
          invert: false,
        },
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: true,
        // },
        // autoHeight: true,
        pagination: {
          el: '.blog-slider__pagination',
          clickable: true,
        }
    });
      
      
});
