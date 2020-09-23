let sharePopUpActive = document.querySelector("js-share-popup-active");
let sharePopUp = document.querySelector(".js-share-popup");
let shareText = document.querySelector(".share-text");
let socialMediaIcons = document.querySelector(".social-media-icons");

let shareBtn = document.querySelector(".js-share-btn");
let shareBtnAlt = document.querySelector(".js-share-btn-alt");
let mainShareIcon = document.querySelector('.main-share-icon');
let secondaryShareIcon = document.querySelector('.secondary-share-icon');

let socialIcons = socialMediaIcons.children;

document.addEventListener("click", function (e) {
  if (e.target === shareBtn) {
      mainShareIcon.classList.add('icon-active');
      secondaryShareIcon.classList.add('icon-active');
    sharePopUp.classList.add("js-share-popup-active");
    shareBtn.classList.add('js-share-btn-active');
  } else {
    if (
    sharePopUpActive !== undefined &&
      e.target !== sharePopUp
      && e.target !== sharePopUpActive
      && e.target !== socialMediaIcons
      && e.target !== shareText
      && e.target !== socialIcons[0]
      && e.target !== socialIcons[1]
      && e.target !== socialIcons[2]
      && e.target !== shareBtnAlt
    ) {

        mainShareIcon.classList.remove('icon-active');
        secondaryShareIcon.classList.remove('icon-active');
      sharePopUp.classList.remove("js-share-popup-active");
      shareBtn.classList.remove('js-share-btn-active');
    }
  }
});
