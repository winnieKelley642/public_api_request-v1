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
generateUsers();
//create function to generate users
function generateUsers(){
  $.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      generateGallery(data);
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
  for(let i = 0; i < data.results.length; i++){
    const cardDiv = document.createElement('div');
    cardDiv.className = ('card');
    galleryDiv.appendChild(cardDiv);

    const cardImgContainerDiv = document.createElement('div');
    cardImgContainerDiv.className = ('card-img-container');
    cardDiv.appendChild(cardImgContainerDiv);

    const cardImgImages = document.createElement('img');
    cardImgImages.className = ('card-img');
    cardImgImages.src = `${data.results[i].picture.large}`;
    cardImgImages.alt = ('profile picture');
    cardImgContainerDiv.appendChild(cardImgImages);

    const cardInfoContainerDiv = document.createElement('div');
    cardInfoContainerDiv.className = ('card-info-container');
    cardDiv.appendChild(cardInfoContainerDiv);

    const cardNameCapH3 = document.createElement('h3');
    cardNameCapH3.id = ('name');
    cardNameCapH3.className = ('card-name cap');
    cardNameCapH3.textContent = (`${data.results[i].name.first} ${data.results[i].name.last}`);
    cardInfoContainerDiv.appendChild(cardNameCapH3);

    const cardTextP = document.createElement('p');
    cardTextP.className = ('card-text');
    cardTextP.textContent = (`${data.results[i].email}`);
    cardInfoContainerDiv.appendChild(cardTextP);

    const cardTextCapP = document.createElement('p');
    cardTextCapP.className = ('card-text cap');
    cardTextCapP.textContent = (`${data.results[i].location.city}, ${data.results[i].location.state}`);
    cardInfoContainerDiv.appendChild(cardTextCapP);

    //add event listener for when card is clicked on
    cardDiv.addEventListener('click', (e) => {
      console.log(`clicked`);
      let clickedCard = e.target;
      console.log(clickedCard);
      console.log(clickedCard.firstElementChild.className);
      generateModal(clickedCard.data);
    });
  }
}

/**
 * Modal
 */
function generateModal(data){
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
  modalImgImages.src = (`${data.results.picture.large}`);
  modalImgImages.alt = ('profile picture');
  modalDiv.appendChild(modalImgImages);

  const modalNameCapH3 = document.createElement('h3');
  modalNameCapH3.id = ('name');
  modalNameCapH3.className = ('modal-name');
  modalNameCapH3.textContent = (`${data.results.name} ${data.results.name}`);
  modalDiv.appendChild(modalNameCapH3);

  const modalTextEmailP = document.createElement('p');
  modalTextEmailP.className = ('modal-text');
  modalTextEmailP.textContent = (`${data.results.email}`);
  modalDiv.appendChild(modalTextEmailP);

  const modalTextCapCityP = document.createElement('p');
  modalTextCapCityP.className = ('modal-text cap');
  modalTextCapCityP.textContent = (`${data.results.location}`);
  modalDiv.appendChild(modalTextCapCityP);

  const hr = document.createElement('hr');
  modalDiv.appendChild(hr);

  const modalTextPhoneNumberP = document.createElement('p');
  modalTextPhoneNumberP.className = ('modal-text');
  modalTextPhoneNumberP.textContent = (`${data.results.phone}`);
  modalDiv.appendChild(modalTextPhoneNumberP);

  const modalTextAddress = document.createElement('p');
  modalTextAddress.className = ('modal-text');
  modalTextAddress.textContent = (`${data.results.location}`);
  modalDiv.appendChild(modalTextAddress);

  const modalTextBirthday = document.createElement('p');
  modalTextBirthday.className = ('modal-text');
  modalTextBirthday.textContent = (`Birthday: ${data.results.dob}`);
  modalDiv.appendChild(modalTextBirthday);
}
