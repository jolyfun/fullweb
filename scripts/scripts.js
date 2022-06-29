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
      strings: ["^1000 Разработка сайтов"],
    });

    var typed2 = new Typed("#typed-span-preview", {
      strings: [
        "^2000 Полный цикл разработки продукта ^3000",
        "Индивидуальный подход к каждому клиенту ^3000",
        "Доработка существующего сайта ^3000",
        "Создание админки ^3000",
        "Создание сайта на wordpress ^3000",
        "Разработка телеграмм-бота для вашего сайта",
      ],
    });
  };

  const main = () => {
    header();
    animationText();
  };

  main();
})();
