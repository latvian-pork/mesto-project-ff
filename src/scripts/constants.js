const cardContainer = document.querySelector(".places__list");

const addButton = document.querySelector(".profile__add-button");
const editButton = document.querySelector(".profile__edit-button");
const userpicButton = document.querySelector(".profile__image_change-button");

const popups = document.querySelectorAll(".popup");

const addPopup = document.querySelector(".popup_type_new-card");
const editPopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_image");
const userpicPopup = document.querySelector(".popup_type_userpic");

const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");
const profileImage = document.querySelector(".profile__image");

const popupImage = cardPopup.querySelector(".popup__image");
const imageDescription = cardPopup.querySelector(".popup__caption");

const addForm = document.forms["new-place"];
const editForm = document.forms["edit-profile"];
const userpicForm = document.forms["userpic"];

const placeInput = addForm.querySelector(".popup__input_type_card-name");
const urlInput = addForm.querySelector(".popup__input_type_url");

const nameInput = editForm.querySelector(".popup__input_type_name");
const jobInput = editForm.querySelector(".popup__input_type_description");

const userpicInput = userpicForm.querySelector(
  ".popup__input_type_userpic-url"
);

export {
  cardContainer,
  addButton,
  editButton,
  userpicButton,
  popups,
  addPopup,
  editPopup,
  cardPopup,
  userpicPopup,
  profileName,
  profileJob,
  profileImage,
  popupImage,
  imageDescription,
  addForm,
  editForm,
  userpicForm,
  placeInput,
  urlInput,
  nameInput,
  jobInput,
  userpicInput,
};
