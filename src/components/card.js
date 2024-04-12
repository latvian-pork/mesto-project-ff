
function createCard(cardData, handleLikeButton, handleImageClick) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");

  cardImage.src = cardData.link;
  cardTitle.textContent = cardData.name;
  cardImage.alt = `На фото ${cardData.name}`;

  deleteButton.addEventListener("click", () => deleteCard(deleteButton));
  likeButton.addEventListener("click", (evt) => handleLikeButton(evt.target));
  cardImage.addEventListener("click", () =>
    handleImageClick(cardImage, cardTitle)
  );

  return cardElement;
}

function deleteCard(button) {
  button.closest(".card").remove();
}

function handleLikeButton(button) {
  button.classList.toggle("card__like-button_is-active");
}

export { createCard, deleteCard, handleLikeButton };
