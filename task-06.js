const validationInput = document.getElementById('validation-input');
 
validationInput.addEventListener('blur', () => {
  const length = parseInt(validationInput.dataset.length);
  if (validationInput.value.length === length) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});