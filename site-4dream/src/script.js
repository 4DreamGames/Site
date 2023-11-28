const menuList = document.querySelector(".menu-list");

function toggleMenu(e) {
  if (e.name === 'menu') {
    e.name = 'close';
    menuList.classList.add("")
  }
  else {
    e.name = 'menu';
  }
}