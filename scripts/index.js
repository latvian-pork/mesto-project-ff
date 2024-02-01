// @todo: Темплейт карточки

const cardTemplate = document.getElementById("card-template").content;

// @todo: DOM узлы

const cardContainer = document.querySelector(".places__list");

// @todo: Функция создания карточки

function createCard(cardData, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImage.src = cardData.link;
  cardTitle.textContent = cardData.name;
  cardImage.alt = `На фото ${cardData.name}`;

  deleteButton.addEventListener("click", () => deleteCard(deleteButton));

  return cardElement;
}
// @todo: Функция удаления карточки

function deleteCard(button) {
  button.closest(".card").remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach((cardElement) => {
  cardContainer.append(createCard(cardElement, deleteCard));
});
