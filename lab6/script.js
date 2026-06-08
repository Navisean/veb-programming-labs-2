const image = document.getElementById('bookImage');
const menuItems = document.querySelectorAll('nav li');

menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    const bookNum = item.getAttribute('data-book');
    
    // Меняем картинку
    image.src = `images/book${bookNum}.jpg`;
    
    // Перезапускаем анимацию
    image.classList.remove('slide');
    void image.offsetWidth; 
    image.classList.add('slide');
  });
});