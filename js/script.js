// alert(`linked to html`);

/** Treehouse project 5 
 * api request
 */

 /* Global variables: */
 const searchContainerDiv = document.querySelector('.search-container');
 const galleryDiv = document.querySelector('#gallery');
 const body = document.querySelector('body');
 //const modalContainerDiv;
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
const cardDiv = document.createElement('div');
cardDiv.className = ('card');
galleryDiv.appendChild(cardDiv);

const cardImgContainerDiv = document.createElement('div');
cardImgContainerDiv.className = ('card-img-container');
cardDiv.appendChild(cardImgContainerDiv);

const cardImgImages = document.createElement('img');
cardImgImages.className = ('card-img');
cardImgImages.src = ('https://placehold.it/90x90');
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

/**
 * Modal
 */
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
modalInfoContainerDiv.appendChild(modalImgImages);

const modalNameCapH3 = document.createElement('h3');
modalNameCapH3.id = ('name');
modalNameCapH3.className = ('modal-name');
modalNameCapH3.textContent = ('name');
modalInfoContainerDiv.appendChild(modalNameCapH3);

const modalTextEmailP = document.createElement('p');
modalTextEmailP.className = ('modal-text');
modalTextEmailP.textContent = ('email');
modalInfoContainerDiv.appendChild(modalTextEmailP);

const modalTextCapCityP = document.createElement('p');
modalTextCapCityP.className = ('modal-text cap');
modalTextCapCityP.textContent = ('city');
modalInfoContainerDiv.appendChild(modalTextCapCityP);

const hr = document.createElement('hr');
modalInfoContainerDiv.appendChild(hr);
// const hr = doucment.createElement('hr');
// hr.style.color = green;
// modalInfoContainerDiv.appendChild(hr);

const modalTextPhoneNumberP = document.createElement('p');
modalTextPhoneNumberP.className = ('modal-text');
modalTextPhoneNumberP.textContent = ('(555) 555-5555');
hr.appendChild(modalTextPhoneNumberP);

const modalTextAddress = document.createElement('p');
modalTextAddress.className = ('modal-text');
modalTextAddress.textContent = ('123 Portland Ave., Portland, OR 97204');
hr.appendChild(modalTextAddress);

const modalTextBirthday = document.createElement('p');
modalTextBirthday.className = ('modal-text');
modalTextBirthday.textContent = ('Birthday: 10/21/2015');
hr.appendChild(modalTextBirthday);

/**
 * 12 random users pulled in a single API request
 */

/**
 * Displays 12 random user api including:
 * employee image
 * first and last name
 * email
 * city or location
 */