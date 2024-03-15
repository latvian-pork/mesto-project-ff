function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeByEscape);

  const closeButton = popup.querySelector(".popup__close");
  closeButton.addEventListener("click", () => closePopup(popup));
  handleOverlayClick(popup);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByEscape);
}

function handleOverlayClick(popup) {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_is-opened")) {
      closePopup(popup);
    }
  });
}

const closeByEscape = (evt) => {
  if (evt.key === "Escape") {
    closePopup(evt.currentTarget.querySelector(".popup_is-opened"));
  }
};

export { openPopup, closePopup, handleOverlayClick, closeByEscape };
