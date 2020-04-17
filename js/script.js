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
    //for exceeds (name needs to be in english, I selected to only display random US users)
    url: 'https://randomuser.me/api/?results=12&nat=us',
    dataType: 'json',
    success: function(data) {
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
searchSubmitButton.value = ('&#x1F50D');
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
      const numberOfRandomUsers = data.results.length
      let clickedCard = e.target;
      // console.log(clickedCard.firstElementChild.className);
      generateModal(data.results, i, numberOfRandomUsers);
    });
  }
}

/**
 * Modal
 */
function generateModal(data, i, numberOfRandomUsers){
  const modalContainerDiv = document.createElement('div');
  modalContainerDiv.className = ('modal-container');
  body.appendChild(modalContainerDiv);
  
  // const modalPreviousBtn = document.createElement('button');
  // modalPreviousBtn.type = ('button');
  // modalPreviousBtn.id = ('modal-previous-btn');
  // modalPreviousBtn.className = ('modal-previous-btn');
  // modalPreviousBtn.textContent = (`<<`);
  // modalContainerDiv.appendChild(modalPreviousBtn);

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
  modalImgImages.src = (`${data[i].picture.large}`);
  modalImgImages.alt = ('profile picture');
  modalDiv.appendChild(modalImgImages);

  const modalNameCapH3 = document.createElement('h3');
  modalNameCapH3.id = ('name');
  modalNameCapH3.className = ('modal-name');
  modalNameCapH3.textContent = (`${data[i].name.first} ${data[i].name.last}`);
  modalDiv.appendChild(modalNameCapH3);

  const modalTextEmailP = document.createElement('p');
  modalTextEmailP.className = ('modal-text');
  modalTextEmailP.textContent = (`${data[i].email}`);
  modalDiv.appendChild(modalTextEmailP);

  const modalTextCapCityP = document.createElement('p');
  modalTextCapCityP.className = ('modal-text cap');
  modalTextCapCityP.textContent = (`${data[i].location.city}`);
  modalDiv.appendChild(modalTextCapCityP);

  const hr = document.createElement('hr');
  modalDiv.appendChild(hr);

  const modalTextPhoneNumberP = document.createElement('p');
  modalTextPhoneNumberP.className = ('modal-text');
  modalTextPhoneNumberP.textContent = (`${data[i].phone}`);
  modalDiv.appendChild(modalTextPhoneNumberP);

  const modalTextAddress = document.createElement('p');
  modalTextAddress.className = ('modal-text');
  modalTextAddress.textContent = (`${data[i].location.street.number} ${data[i].location.street.name}, ${data[i].location.city}, ${data[i].location.state} ${data[i].location.postcode}`);
  modalDiv.appendChild(modalTextAddress);

  const modalTextBirthday = document.createElement('p');
  modalTextBirthday.className = ('modal-text');
  //extract date of birth from the original data results (html format is MM/DD/YYYY)
  let year = (data[i].dob.date).slice(0,4);
  let month = (data[i].dob.date).slice(5,7);
  let day = (data[i].dob.date).slice(8,10);
  modalTextBirthday.textContent = (`Birthday: ${month}/${day}/${year}`);
  modalDiv.appendChild(modalTextBirthday);

  //making the X button work for closing the modal
  modalCloseBtn.addEventListener('click', (e) =>{
    modalContainerDiv.hidden = true;
  });

  //add navigation buttons for exceeds
  const modalPreviousBtn = document.createElement('button');
  modalPreviousBtn.type = ('button');
  modalPreviousBtn.id = ('modal-previous-btn');
  modalPreviousBtn.className = ('modal-previous-btn');
  modalPreviousBtn.textContent = (`<<`);
  modalContainerDiv.appendChild(modalPreviousBtn);

  const modalNextBtn = document.createElement('button');
  modalNextBtn.type = ('button');
  modalNextBtn.id = ('modal-next-btn');
  modalNextBtn.className = ('modal-next-btn');
  modalNextBtn.textContent = (`>>`);
  modalContainerDiv.appendChild(modalNextBtn);

  //if it is not the first card, show previous button
  if(i <= 0){
    modalPreviousBtn.hidden = true;
    }else if(i >= (numberOfRandomUsers-1)){  
    modalNextBtn.hidden = true;
  }else{
    modalPreviousBtn.hidden = false;
    modalNextBtn.hidden = false;
  }

  //add event listener to these two buttons
  //previous button
  modalPreviousBtn.addEventListener('click', (e) =>{
    i--;
    modalImgImages.src = (`${data[i].picture.large}`);
    modalNameCapH3.textContent = (`${data[i].name.first} ${data[i].name.last}`);
    modalTextEmailP.textContent = (`${data[i].email}`);
    modalTextCapCityP.textContent = (`${data[i].location.city}`);
    modalTextPhoneNumberP.textContent = (`${data[i].phone}`);
    modalTextAddress.textContent = (`${data[i].location.street.number} ${data[i].location.street.name}, ${data[i].location.city}, ${data[i].location.state} ${data[i].location.postcode}`);
    let year = (data[i].dob.date).slice(0,4);
    let month = (data[i].dob.date).slice(5,7);
    let day = (data[i].dob.date).slice(8,10);
    modalTextBirthday.textContent = (`Birthday: ${month}/${day}/${year}`);
    if(i <= 0){
      modalPreviousBtn.hidden = true;
    }else if(i >= (numberOfRandomUsers-1)){  
      modalNextBtn.hidden = true;
    }else{
      modalPreviousBtn.hidden = false;
      modalNextBtn.hidden = false;
    }
  })
  //next button
  modalNextBtn.addEventListener('click', (e) =>{
    i++;
    modalImgImages.src = (`${data[i].picture.large}`);
    modalNameCapH3.textContent = (`${data[i].name.first} ${data[i].name.last}`);
    modalTextEmailP.textContent = (`${data[i].email}`);
    modalTextCapCityP.textContent = (`${data[i].location.city}`);
    modalTextPhoneNumberP.textContent = (`${data[i].phone}`);
    modalTextAddress.textContent = (`${data[i].location.street.number} ${data[i].location.street.name}, ${data[i].location.city}, ${data[i].location.state} ${data[i].location.postcode}`);
    let year = (data[i].dob.date).slice(0,4);
    let month = (data[i].dob.date).slice(5,7);
    let day = (data[i].dob.date).slice(8,10);
    modalTextBirthday.textContent = (`Birthday: ${month}/${day}/${year}`);
    if(i <= 0){
      modalPreviousBtn.hidden = true;
    }else if(i >= (numberOfRandomUsers-1)){  
      modalNextBtn.hidden = true;
    }else{
      modalPreviousBtn.hidden = false;
      modalNextBtn.hidden = false;
    }
  });
}

//add search feature
searchInputBox.addEventListener('keyup', (e) =>{
  let userInput = (e.target).value;
  console.log(`key ${userInput}`);
  console.log(`data: ${data.results[i]}`);
  for(let i = 0; i < data.results[i].length; i++){
    const cardFirstName = (data.results[i].name.first).toLowerCase();
    const cardLastName = (data.results[i].name.last).toLowerCase();
    const cardName = (`${cardFirstName} ${cardLastName}`);
    const card = document.querySelectorAll('.card');
    console.log(`card: ${card}`);
    // console.log(cardFirstName);
    // console.log(cardLastName);
    // console.log(cardName);  
    console.log(`DATA: ${data}`);
    data.forEach(element => console.log(element));
    if(cardName.includes(userInput.toLowerCase())){
      console.log('match');
    }else{ 
      console.log(`does not match`);
    }
  }
});