const counterValue = document.getElementById('value');
let count = 0;
 
document.querySelectorAll('#counter button').forEach(button => {
  button.addEventListener('click', () => {
    if (button.dataset.action === 'increment') {
      count++;
    } else {
      count--;
    }
    counterValue.textContent = count;
  });
});