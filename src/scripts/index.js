import {
  cardContainer,
  addButton,
  editButton,
  popups,
  addPopup,
  editPopup,
  cardPopup,
  profileName,
  profileJob,
  popupImage,
  imageDescription,
  addForm,
  editForm,
  placeInput,
  urlInput,
  nameInput,
  jobInput,
} from "./constants.js";

import { initialCards } from "./cards.js";
import "../styles/index.css";
import {
  createCard,
  deleteCard,
  handleLikeButton,
} from "../components/card.js";
import { openPopup, closePopup, closeByEscape } from "../components/modal.js";
import { enableValidation, clearValidation } from './validation.js';

const handleImageClick = (image, title) => {
  openPopup(cardPopup);

  popupImage.src = image.src;
  popupImage.alt = image.alt;
  imageDescription.textContent = title.textContent;
};

function handleEditFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(editPopup);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  const newCard = {};
  newCard.link = urlInput.value;
  newCard.name = placeInput.value;
  evt.target.reset();
  cardContainer.prepend(
    createCard(newCard, handleLikeButton, handleImageClick)
  );
  closePopup(addPopup);
}

initialCards.forEach((cardElement) => {
  cardContainer.append(
    createCard(cardElement, handleLikeButton, handleImageClick)
  );
});

addButton.addEventListener("click", () => {
  openPopup(addPopup);
});

editButton.addEventListener("click", () => {
  openPopup(editPopup);
  clearValidation(editForm, {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });  
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

editForm.addEventListener("submit", handleEditFormSubmit);
addForm.addEventListener("submit", handleAddFormSubmit);

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_is-opened")) {
      closePopup(popup);
    } else if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 
