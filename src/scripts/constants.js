const cardContainer = document.querySelector(".places__list");

const addButton = document.querySelector(".profile__add-button");
const editButton = document.querySelector(".profile__edit-button");

const popups = document.querySelectorAll(".popup");

const addPopup = document.querySelector(".popup_type_new-card");
const editPopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_image");

const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");

const popupImage = cardPopup.querySelector(".popup__image");
const imageDescription = cardPopup.querySelector(".popup__caption");

const addForm = document.forms["new-place"];
const editForm = document.forms["edit-profile"];

const placeInput = addForm.querySelector(".popup__input_type_card-name");
const urlInput = addForm.querySelector(".popup__input_type_url");

const nameInput = editForm.querySelector(".popup__input_type_name");
const jobInput = editForm.querySelector(".popup__input_type_description");

export {
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
};
