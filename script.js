// "Subscribed!" Pop-up
const popUpForm = document.querySelector('.popUpForm');
const subbedPopUp_wndw = document.querySelector('#subbedPopUp_wndw');
const subbedPopUpContent = document.querySelector('.subbedPopUp-content');
const okBtn = document.querySelector('.okBtn');

popUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    popUpWindow.style.display = 'none';
    setTimeout(() => {
        subbedPopUp_wndw.style.display = 'block';
    }, 1);
    setTimeout(() => {
        subbedPopUpContent.style.opacity = '1';
        subbedPopUpContent.style.transition = '250ms ease-in';
    }, 250);
});

okBtn.addEventListener('click', () => {
    subbedPopUp_wndw.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === subbedPopUp_wndw) {
        subbedPopUp_wndw.style.display = 'none'
    }
});

//Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav_menu')
const topNav = document.querySelector('.topnav')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    navMenu.classList.toggle('show');
    topNav.classList.toggle('show');
});

// "View Plans" Modal
const modalBtn = document.querySelector('#modal_btn');
const modalWndw = document.querySelector('#modal_wndw');
const closeModal = document.querySelector('.close_modal');

modalBtn.addEventListener('click', () => {
    modalWndw.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modalWndw.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modalWndw) {
        modalWndw.style.display = 'none'
    }
});

// Subscribe Pop-up
const popUpWindow = document.querySelector('#popUp_wndw');
const popUpContent = document.querySelector('.popUp-content');
const closePopUp = document.querySelector('.close_popUp');

window.addEventListener('load', () => {
    setTimeout( () => {
        popUpWindow.style.display = 'block'
    }, 2900);
    setTimeout( () => {
        popUpContent.style.opacity = '1';
        popUpContent.style.transition = '300ms ease-in'
    }, 3000);
});


closePopUp.addEventListener('click', () => {
    popUpWindow.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popUpWindow) {
        popUpWindow.style.display = 'none'
    }
});

// Window Load Animtions
const headerText = document.querySelector('.header_text');
const headerImg = document.querySelector('.header_img');

window.addEventListener('load', () => {
    headerText.style.opacity = '1';
    headerText.style.transform = 'translateX(0px)';
    headerText.style.transition = '1000ms ease-in-out';
    headerImg.style.opacity = '1';
    headerImg.style.transform = 'translateY(0px)';
    headerImg.style.transition = '1000ms ease-in-out';
});

// Scroll Reveal Animations
const aboutTitle = document.querySelector('.about_title');
const aboutSections = document.querySelector('.about_sections');
const moreInfo = document.querySelector('#more_info');

window.addEventListener('scroll', () => {
    if (window.scrollY>=250) {
        aboutTitle.style.opacity = '1';
        aboutTitle.style.transform = 'translateX(0px)';
        aboutTitle.style.transition = '1000ms ease-in-out';
    };
    if (window.scrollY>=350) {
        aboutSections.style.opacity = '1';
        aboutSections.style.transform = 'translateX(0px)';
        aboutSections.style.transition = '1000ms ease-in-out';
    }
    if (window.scrollY>=750) {
        moreInfo.style.opacity = '1';
        moreInfo.style.transform = 'translateY(0px)';
        moreInfo.style.transition = '1000ms ease-in-out';
    }
});