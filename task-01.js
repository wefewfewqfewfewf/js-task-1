const categories = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categories.length}`);
categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const elements = category.querySelectorAll('ul li');
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elements.length}`);
})