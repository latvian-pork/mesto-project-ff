
const showInputError = (validationConfig, formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConfig.errorClass);
}

const hideInputError = (validationConfig, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
  errorElement.textContent = '';
}

const isValid = (validationConfig, formElement, inputElement) => {
  if(inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity('');
  };

  if(!inputElement.validity.valid) {
    showInputError(validationConfig, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(validationConfig, formElement, inputElement);
  }
};

const hasInvalidInput = (validationConfig, inputList) => {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
  });
};

const toggleButtonState = (validationConfig, inputList, buttonElement) => {
  if(hasInvalidInput(validationConfig, inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(validationConfig.inactiveButtonClass);
  }
};

const setEventListeners = (validationConfig, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  toggleButtonState(validationConfig, inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(validationConfig, formElement, inputElement);
      toggleButtonState(validationConfig, inputList, buttonElement);
    });
  });
};

const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(validationConfig, formElement);
  });
};

const clearValidation = (formElement, validationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
inputList.forEach((inputElement) => {
  hideInputError(validationConfig, formElement, inputElement);
});
const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
buttonElement.classList.add(validationConfig.inactiveButtonClass);
};  

export { showInputError, hideInputError, isValid, hasInvalidInput, toggleButtonState, setEventListeners, enableValidation, clearValidation };