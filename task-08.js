
const loginForm = document.querySelector('.login-form');
 
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
 
const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;
 
  if (email.trim() === '' || password.trim() === '') {
    alert('Wypełnij wszystkie pola');
    return;
  }
 
  const formData = {
    email,
    password
  };
 
  console.log(formData);
  loginForm.reset();
});