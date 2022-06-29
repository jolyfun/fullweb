"use strict";

(() => {
  const header = () => {
    const headerMobile = document.querySelector(".header-mobile");
    const headerDesktop = document.querySelector(".header-desktop");
    console.log(headerDesktop);

    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;

    const controlMAinMarginTop = () => {
      const main = document.querySelector(".main");
      const header = document.querySelector(".header");
      const heightHeader = window.getComputedStyle(header).height;
      console.log(heightHeader);
      main.style.marginTop = `${heightHeader}`;
      console.log(main);
    };
    const toggleBurger = () => {
      if (screenWidth <= 1000) {
        console.log(" меньше 1000");
        headerMobile.classList.remove("visually-hidden");
        headerDesktop.classList.add("visually-hidden");
      } else {
        console.log(" больше 1000");
        headerMobile.classList.add("visually-hidden");
        headerDesktop.classList.remove("visually-hidden");
      }
    };
    toggleBurger();

    controlMAinMarginTop();

    window.addEventListener("resize", () => {
      controlMAinMarginTop();
      screenWidth = window.innerWidth;
      screenHeight = window.innerHeight;

      //   console.log(screenWidth);
      //   console.log(screenHeight);

      toggleBurger();
    });

    let burgerStatus = "close";

    if (burgerStatus == "close") {
    } else {
    }
  };

  const animationText = () => {
    var typed = new Typed("#typed-title-preview", {
      strings: ["Разработка сайтов ^60000"],
      typeSpeed: 30,
      loop: true,
      loopCount: Infinity,
    });

    var typed2 = new Typed("#typed-span-preview", {
      strings: [
        "Полный цикл разработки продукта ^3000",
        "Индивидуальный подход к каждому клиенту ^3000",
        "Доработка существующего сайта ^3000",
        "Создание админки ^3000",
        "Создание сайта на wordpress ^3000",
        "Разработка телеграмм-бота для вашего сайта ^3000",
      ],
      typeSpeed: 20,
      loop: true,
      loopCount: Infinity,
    });
  };

  const animationBackgroundPrice = () => {
    VANTA.FOG({
      el: "#price",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      highlightColor: 0xffa300,
      midtoneColor: 0x9b00ff,
      lowlightColor: 0xffb400,
      baseColor: 0xff
    })
  }

  const main = () => {
    header();
    animationText();
    animationBackgroundPrice()
  };

  main();
})();
