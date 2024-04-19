import { deleteUserCard, likeCard, deleteLike } from "../scripts/api";

const createCard = (
  cardData,
  user,
  handleLikeButton,
  handleImageClick,
  deleteCard
) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const likeCount = cardElement.querySelector(".like-count");

  cardImage.src = cardData.link;
  cardTitle.textContent = cardData.name;
  cardImage.alt = `На фото ${cardData.name}`;
  likeCount.textContent = cardData.likes.length;

  if (user._id === cardData.owner._id) {
    deleteButton.addEventListener("click", () =>
      deleteCard(cardData._id, cardElement)
    );
  } else {
    deleteButton.remove();
  }


  if(cardData.likes.some(like => like._id === user._id)) {
    likeButton.classList.add('card__like-button_is-active');
  };

  likeButton.addEventListener("click", (evt) =>
    handleLikeButton(evt.target, cardData, likeCount)
  );
  cardImage.addEventListener("click", () =>
    handleImageClick(cardImage, cardTitle)
  );
  return cardElement;
}

const deleteCard = (cardId, cardElement) => {
  deleteUserCard(cardId).then(() => {
    deleteCardFromDOM(cardElement);
  });
};

const deleteCardFromDOM = (card) => {
  card.remove();
};

const handleLikeButton = (likeButton, cardData, likeCount) => {
  
  const likeMethod = (cardData) => likeButton.classList.contains('card__like-button_is-active') ? deleteLike(cardData._id) : likeCard(cardData._id);
  likeMethod(cardData)
  .then((cardData) => {
    likeButton.classList.toggle('card__like-button_is-active');
    likeCount.textContent = cardData.likes.length;
  })
  .catch((err) => {
    console.log(err);
  })
  
};

export { createCard, deleteCard, handleLikeButton };
