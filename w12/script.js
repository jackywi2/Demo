const p = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-nav .main-menu');
 
// console.log('mainMenu', mainMenu);
p.addEventListener('click', function () {
  mainMenu.classList.toggle('show');
  if (mainMenu.classList.contains('show')) {
    p.innerHTML = `<i class="fas fa-bars fa-2x"></i>`;
  } else {
    p.innerHTML = `<i class="fas fa-times fa-2x"></i>`;
  }
});