import createTag from './utilities';

const renderMenu = () => {
  const menuContainer = createTag('ul', 'menu');
  menuContainer.innerHTML = `<li class="menu item"> <p class="menu item name">Beef Gyro Platter</p> <img class="menu item photo" src="resources/photos/food/beef-gyro-platter-530x530.jpeg" /> </li> <li class="menu item"> <p class="menu item name">Chicken Gyro Platter</p> <img class="menu item photo" src="resources/photos/food/chicken-platter-530x530.jpeg" /> </li> <li class="menu item"> <p class="menu item name">Combo Platter</p> <img class="menu item photo" src="resources/photos/food/combo-platter-530x530.jpeg" /> </li> <li class="menu item"> <p class="menu item name">Falafel Platter</p> <img class="menu item photo" src="resources/photos/food/falafel-platter-530x530.jpeg" /> </li>`;
  return menuContainer;
};

export default renderMenu;
