import {
  cardContainer,
  addButton,
  editButton,
  addPopup,
  editPopup,
  cardPopup,
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
import {
  openPopup,
  closePopup,
  handleOverlayClick,
  closeByEscape,
} from "../components/modal.js";

const handleImageClick = (image, title) => {
  openPopup(cardPopup);
  const popupImage = cardPopup.querySelector(".popup__image");
  const imageDescription = cardPopup.querySelector(".popup__caption");

  popupImage.src = image.src;
  popupImage.alt = image.alt;
  imageDescription.textContent = title.textContent;
};

function handleEditFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  const profileName = document.querySelector(".profile__title");
  const profileJob = document.querySelector(".profile__description");

  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;

  closePopup(editPopup);
};

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  const newCard = {};
  newCard.link = urlInput.value;
  newCard.name = placeInput.value;

  cardContainer.prepend(
    createCard(newCard, handleLikeButton, handleImageClick)
  );
  closePopup(addPopup);
};

initialCards.forEach((cardElement) => {
  cardContainer.append(
    createCard(cardElement, handleLikeButton, handleImageClick)
  );
});

addButton.addEventListener("click", () => openPopup(addPopup));
editButton.addEventListener("click", () => openPopup(editPopup));
editForm.addEventListener("submit", handleEditFormSubmit);
addForm.addEventListener("submit", (evt) => handleAddFormSubmit(evt));
