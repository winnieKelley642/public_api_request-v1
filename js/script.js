// alert(`linked to html`);

/** Treehouse project 5 
 * api request
 */

/* Global variables: */
const searchContainerDiv = document.querySelector('.search-container');
const galleryDiv = document.querySelector('#gallery');
const body = document.querySelector('body');

/**
 * 12 random users pulled in a single API request
 */
//add link to jquery for following randomuser.me/api documentation
const jQueryScript = document.createElement('script');
jQueryScript.src = ('https://code.jquery.com/jquery-3.5.0.min.js')
body.appendChild(jQueryScript);

generateUsers();
//create function to generate users
function generateUsers(){
  $.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      for(let i=0; i < 12; i++){
        generateCardDiv(data);
      }
    }
  });
}

/**
 * Search
 */
const searchForm = document.createElement('form');
searchForm.textContent =('#');
searchForm.setAttribute('action', '#');
searchForm.setAttribute('method', 'get');
searchContainerDiv.appendChild(searchForm);

const searchInputBox = document.createElement('input');
searchInputBox.type = ('search');
searchInputBox.id = ('search-input');
searchInputBox.className = ('search-input');
searchInputBox.placeholder = (`Search...`);
searchForm.appendChild(searchInputBox);

const searchSubmitButton = document.createElement('input');
searchSubmitButton.type = ('submit');
searchSubmitButton.value = ('&#x1F50D;');
searchSubmitButton.id = ('search-submit');
searchSubmitButton.className = ('search-submit');
searchForm.appendChild(searchSubmitButton);

/**
 * Gallery
 */
function generateGallery(data){
  const cardDiv = document.createElement('div');
  cardDiv.className = ('card');
  galleryDiv.appendChild(cardDiv);

  const cardImgContainerDiv = document.createElement('div');
  cardImgContainerDiv.className = ('card-img-container');
  cardDiv.appendChild(cardImgContainerDiv);

  const cardImgImages = document.createElement('img');
  cardImgImages.className = ('card-img');
  cardImgImages.src = ('https://code.jquery.com/jquery-3.5.0.min.js');
  cardImgImages.alt = ('profile picture');
  cardImgContainerDiv.appendChild(cardImgImages);

  const cardInfoContainerDiv = document.createElement('div');
  cardInfoContainerDiv.className = ('card-info-container');
  cardDiv.appendChild(cardInfoContainerDiv);

  const cardNameCapH3 = document.createElement('h3');
  cardNameCapH3.id = ('name');
  cardNameCapH3.className = ('card-name cap');
  cardNameCapH3.textContent = ('first last');
  cardInfoContainerDiv.appendChild(cardNameCapH3);

  const cardTextP = document.createElement('p');
  cardTextP.className = ('card-text');
  cardTextP.textContent = ('email');
  cardInfoContainerDiv.appendChild(cardTextP);

  const cardTextCapP = document.createElement('p');
  cardTextCapP.className = ('card-text cap');
  cardTextCapP.textContent = ('city, state');
  cardInfoContainerDiv.appendChild(cardTextCapP);
}

/**
 * Modal
 */
function generateModal(data){
  console.log(cardDiv);
  const modalContainerDiv = document.createElement('div');
  modalContainerDiv.className = ('modal-container');
  body.appendChild(modalContainerDiv);

  const modalDiv = document.createElement('div');
  modalDiv.className = ('modal');
  modalContainerDiv.appendChild(modalDiv);

  const modalCloseBtn = document.createElement('button');
  modalCloseBtn.type = ('button');
  modalCloseBtn.id = ('modal-close-btn');
  modalCloseBtn.className = ('modal-close-btn');
  modalDiv.appendChild(modalCloseBtn);

  const modalCloseBtnStrong = document.createElement('strong');
  modalCloseBtnStrong.textContent = ('X');
  modalCloseBtn.appendChild(modalCloseBtnStrong);

  const modalInfoContainerDiv = document.createElement('div');
  modalInfoContainerDiv.className = ('modal-info-container');
  modalDiv.appendChild(modalInfoContainerDiv);

  const modalImgImages = document.createElement('img');
  modalImgImages.className = ('modal-img');
  modalImgImages.src = ('https://placehold.it/125x125');
  modalImgImages.alt = ('profile picture');
  modalDiv.appendChild(modalImgImages);

  const modalNameCapH3 = document.createElement('h3');
  modalNameCapH3.id = ('name');
  modalNameCapH3.className = ('modal-name');
  modalNameCapH3.textContent = ('name');
  modalDiv.appendChild(modalNameCapH3);

  const modalTextEmailP = document.createElement('p');
  modalTextEmailP.className = ('modal-text');
  modalTextEmailP.textContent = ('email');
  modalDiv.appendChild(modalTextEmailP);

  const modalTextCapCityP = document.createElement('p');
  modalTextCapCityP.className = ('modal-text cap');
  modalTextCapCityP.textContent = ('city');
  modalDiv.appendChild(modalTextCapCityP);

  const hr = document.createElement('hr');
  modalDiv.appendChild(hr);

  const modalTextPhoneNumberP = document.createElement('p');
  modalTextPhoneNumberP.className = ('modal-text');
  modalTextPhoneNumberP.textContent = ('(555) 555-5555');
  modalDiv.appendChild(modalTextPhoneNumberP);

  const modalTextAddress = document.createElement('p');
  modalTextAddress.className = ('modal-text');
  modalTextAddress.textContent = ('123 Portland Ave., Portland, OR 97204');
  modalDiv.appendChild(modalTextAddress);

  const modalTextBirthday = document.createElement('p');
  modalTextBirthday.className = ('modal-text');
  modalTextBirthday.textContent = ('Birthday: 10/21/2015');
  modalDiv.appendChild(modalTextBirthday);
}

// function generateCardDiv(){
//   for(let i = 0; i < 1; i++){
//     console.log(`in loop`);
//   }
// }