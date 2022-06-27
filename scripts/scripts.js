"use strict";

(() => {

    const header = () => {
        const headerMobile = document.querySelector('.header-mobile');
        const headerDesktop = document.querySelector('.header-desktop');
        console.log(headerDesktop);

        let screenWidth = window.screen.width;
        let screenHeight = window.screen.height;
    
        const toggleBurger = () => {
          if (screenWidth <= 1000) {
            console.log(' меньше 1000');
            headerMobile.classList.remove('visually-hidden')
            headerDesktop.classList.add('visually-hidden')
          } else {
            console.log(' больше 1000');
            headerMobile.classList.add('visually-hidden')
            headerDesktop.classList.remove('visually-hidden')
          }
        };
        toggleBurger();
    
        window.addEventListener("resize", () => {
          screenWidth = window.innerWidth;
          screenHeight = window.innerHeight;
    
        //   console.log(screenWidth);
        //   console.log(screenHeight);
    
          toggleBurger();
        });

        let burgerStatus = 'close'

        if (burgerStatus == 'close') {
            
        } else {

        }
    }

    const main = () => {
        header()
    }

    main()
})()