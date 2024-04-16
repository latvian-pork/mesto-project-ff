import {
  cardContainer,
  addButton,
  editButton,
  userpicButton,
  popups,
  addPopup,
  editPopup,
  cardPopup,
  userpicPopup,
  userpicForm,
  profileName,
  profileJob,
  profileImage,
  popupImage,
  imageDescription,
  addForm,
  editForm,
  placeInput,
  urlInput,
  nameInput,
  jobInput,
  userpicInput,
} from "./constants.js";

import { initialCards } from "./cards.js";
import "../styles/index.css";
import {
  createCard,
  deleteCard,
  handleLikeButton,
} from "../components/card.js";
import { openPopup, closePopup, closeByEscape } from "../components/modal.js";
import {
  enableValidation,
  clearValidation,
  toggleButtonState,
} from "./validation.js";
import {
  getInitialCards,
  getUserData,
  editUserData,
  postNewCard,
  deleteUserCard,
  likeCard,
  deleteLike,
  changeAvatar,
} from "./api.js";

Promise.all([getInitialCards(), getUserData()]).then(([cards, user]) => {
  cards.forEach((cardData) => {
    renderInitialCards(cardData, user);
  });
  renderUserData();
});

const renderUserData = () => {
  getUserData().then((userData) => {
    const userName = document.querySelector(".profile__title");
    const userDescription = document.querySelector(".profile__description");
    const userImage = document.querySelector(".profile__image");

    userName.textContent = userData.name;
    userDescription.textContent = userData.about;
    userImage.style = `background-image: url('${userData.avatar}')`;

    return userData;
  });
};

const renderInitialCards = (cardData, user) => {
  cardContainer.append(
    createCard(cardData, user, handleLikeButton, handleImageClick, deleteCard)
  );
};

const handleImageClick = (image, title) => {
  openPopup(cardPopup);

  popupImage.src = image.src;
  popupImage.alt = image.alt;
  imageDescription.textContent = title.textContent;
};

const renderLoading = (isLoading, formElement) => {
  const formButton = formElement.querySelector(".button");
  if (isLoading) {
    formButton.textContent = "Сохранение...";
  } else {
    formButton.textContent = "Сохранить";
  }
};

const handleEditFormSubmit= (evt) => {
  evt.preventDefault();
  renderLoading(true, evt.target);
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  editUserData(profileName.textContent, profileJob.textContent).finally(() => {
    renderLoading(false, evt.target);
  });
  closePopup(editPopup);
  evt.target.reset();
  toggleButtonState(validationConfig, evt.target);
}

const handleAddFormSubmit = (evt) => {
  evt.preventDefault();
  renderLoading(true, evt.target);
  postNewCard(placeInput.value, urlInput.value)
    .then((newCard) => {
      cardContainer.prepend(
        createCard(
          newCard,
          newCard.owner,
          handleLikeButton,
          handleImageClick,
          deleteCard
        )
      );
    })
    .finally(() => {
      renderLoading(false, evt.target);
    });

  closePopup(addPopup);
  evt.target.reset();
  toggleButtonState(validationConfig, evt.target);
}

const handleUserpicFormSubmit = (evt) => {
  evt.preventDefault();
  renderLoading(true, evt.target);
  changeAvatar(userpicInput.value)
    .then(() => {
      evt.target.reset();
    })
    .finally(() => {
      renderLoading(false, evt.target);
    });
  profileImage.style = `background-image: url(${userpicInput.value})`;
  closePopup(userpicPopup);
  evt.target.reset();
  toggleButtonState(validationConfig, evt.target);
};

addButton.addEventListener("click", () => {
  openPopup(addPopup);
});

userpicButton.addEventListener("click", () => {
  openPopup(userpicPopup);
});

editButton.addEventListener("click", () => {
  openPopup(editPopup);
  clearValidation(editForm, validationConfig);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

userpicForm.addEventListener("submit", handleUserpicFormSubmit);
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

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(validationConfig);
