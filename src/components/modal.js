function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByEscape);
}

const closeByEscape = (evt) => {
  if (evt.key === "Escape") {
    closePopup(evt.currentTarget.querySelector(".popup_is-opened"));
  }
};

export { openPopup, closePopup, closeByEscape };
