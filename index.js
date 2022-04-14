const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.header__navigation'),
      navigationLinks = document.querySelectorAll('.navigation__link');

hamburger.addEventListener('click', function () {
    menu.classList.toggle('open');
    hamburger.classList.toggle('position-hamburger');
    hamburger.classList.toggle('is-active');

});

for (const navigationLink of navigationLinks) {
    navigationLink.addEventListener('click', function() {
        menu.classList.remove('open');
        hamburger.classList.remove('position-hamburger');
        hamburger.classList.toggle('is-active');
    });
}

const showConsole = ['Смена изображений в секции portfolio +25', '\n' , 
                    'Перевод страницы на два языка +25', '\n', 
                    'Переключение светлой и тёмной темы +25', '\n',
                    'Дополнительный функционал: выбранный пользователем язык отображения страницы  +3', '\n',
                    'Итого: 78 баллов', '\n',].join("");
console.log(showConsole)

const tabsLink = document.querySelector('.tabs');
const portfolioGalleryImgs = document.querySelectorAll('.portfolio__gallery-img');

function changeImage(event) {
    if(event.target.classList.contains('tabs__link')) {
        changeClassActive('tabs__link-active', event);
        let datasetSeason = event.target.dataset.season;
        portfolioGalleryImgs.forEach((img, index) => {
            img.src = `assets/img/portfolio/${datasetSeason}/${index + 1}.jpg`;
        });
    }
}

tabsLink.addEventListener('click', (e) => {
    changeImage(e);
})

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadSummerImages() {
    seasons.forEach(season => {
        for(let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `assets/img/portfolio/${season}/${i}.jpg`;
          }
    })

  }
  preloadSummerImages();

  //   .tabs__link-active
  const tabsLinks = document.querySelectorAll('.tabs__link');
  // tabsLinks.classList.add('tabs__link-active');

  function changeClassActive(className, e) {
        tabsLinks.forEach(tab => {
            tab.classList.remove(className)
        })
        e.target.classList.add(className)
    }




// console.log(dataLanguage);

function getTranslate(lang) {
    const dataLanguage = document.querySelectorAll('[data-language]');
    dataLanguage.forEach(element => {
        let datasetLanguage = element.dataset.language;
        let currentElement = document.querySelector("[data-language = " + datasetLanguage + "]");
        currentElement.textContent = language[lang][datasetLanguage];

        if (element.placeholder) {
            currentElement.placeholder = language[lang][datasetLanguage];
            currentElement.textContent = language[lang][datasetLanguage];
        }

    })
}

const headerLanguages = document.querySelector('.header__language'),
      headerBtns = document.querySelectorAll('.header__lang');

headerLanguages.addEventListener('click', (e) => {
    headerBtns.forEach(element => {
        element.classList.remove('header__lang-active');
    })
    if (e.target.classList.contains('header__en')) {
        e.target.classList.add('header__lang-active')
        lang = 'en';
        getTranslate(lang);
    } else {
        e.target.classList.add('header__lang-active')
        lang = 'ru';
        getTranslate(lang);
    }
})


const themeColor = document.querySelector('.theme-color');
const arrayClasses = ["portfolio__title", "portfolio", "video",  "video__title", "skills", "skills__title", "price", "price__title", "price__item-text"];
const sectionTitleLine = 'section-title-line';
const arrayClassesMini = ["navigation__link", "line"];
const openModal = 'header__navigation';



themeColor.addEventListener('click', (e) => {

    e.target.classList.toggle('theme-color-active');

    let temp = document.querySelectorAll('.' + sectionTitleLine);

    temp.forEach(element => {
        element.classList.toggle('light-theme-line');
    })

    arrayClassesMini.forEach(element => {
        let temp = document.querySelectorAll('.' + element);
        temp.forEach(element => {
            element.classList.toggle('light-theme-mini');
        })
    })

        
    let temp1 = document.querySelector('.' + openModal);
    temp1.classList.toggle("light-theme-mini-open");

    
	arrayClasses.forEach(element => {
        let temp = document.querySelectorAll('.' + element);
        temp.forEach(element => {
            element.classList.toggle('light-theme');
        })
        
    })

})


// Сохраняем пользовательские настройки в local storage

let theme = "dark",
    lang = "en";

function setLocalStorage() {
    localStorage.setItem('lang', lang);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('lang')) {
      const lang = localStorage.getItem('lang');
      getTranslate(lang);
    }
  }
window.addEventListener('load', getLocalStorage)

 

 

