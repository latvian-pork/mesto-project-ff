const cardContainer = document.querySelector(".places__list");

const addButton = document.querySelector(".profile__add-button");
const editButton = document.querySelector(".profile__edit-button");

const addPopup = document.querySelector(".popup_type_new-card");
const editPopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_image");

const addForm = addPopup.querySelector(".popup__form");
const editForm = editPopup.querySelector(".popup__form");

const placeInput = addForm.querySelector(".popup__input_type_card-name");
const urlInput = addForm.querySelector(".popup__input_type_url");

const nameInput = editForm.querySelector(".popup__input_type_name");
const jobInput = editForm.querySelector(".popup__input_type_description");

export {
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
};
