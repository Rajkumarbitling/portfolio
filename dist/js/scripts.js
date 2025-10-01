/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2025 Start Bootstrap
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
        const calculateExperience = (jobs) => {
            let totalMilliseconds = 0;

            jobs.forEach(job => {
                const startDate = new Date(job.start);
                const endDate = job.end === "present" ? new Date() : new Date(job.end);
                totalMilliseconds += endDate - startDate;
                console.log('Start Date:', startDate, 'End Date:', endDate);
            });

            const years = Math.floor(totalMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
            let remainingMilliseconds = totalMilliseconds % (365.25 * 24 * 60 * 60 * 1000);

            const months = Math.floor(remainingMilliseconds / (30.44 * 24 * 60 * 60 * 1000));
            remainingMilliseconds %= (30.44 * 24 * 60 * 60 * 1000);

            const days = Math.floor(remainingMilliseconds / (24 * 60 * 60 * 1000));

            return { years, months, days };
        };

        const jobs = [
            { start: "2019-02-01", end: "2020-07-31" },
            { start: "2020-08-01", end: "2022-06-30" },
            { start: "2022-07-01", end: "2024-05-17" },
            { start: "2024-10-16", end: "present" }
        ];

        const { years, months, days } = calculateExperience(jobs);

        const experience = document.body.querySelector('#experiencePeriod');
        if (experience) {
            experience.innerHTML = `${years} Year${years !== 1 ? 's' : ''} ${months} Month${months !== 1 ? 's' : ''} ${days} Day${days !== 1 ? 's' : ''}`;
        }
    })();

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
