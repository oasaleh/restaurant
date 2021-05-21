/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\n\n\n\nconst menu = (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\nconst contactUs = (0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__.default)();\n\nfunction init() {\n  (0,_modules_load__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\n}\ninit();\n\ndocument.getElementById('Menu').addEventListener('click', () => {\n  document.getElementById('contentWindow').innerHTML = '';\n  document.getElementById('contentWindow').appendChild(menu);\n});\ndocument.getElementById('Catering').addEventListener('click', () => {\n  document.getElementById('contentWindow').innerHTML = '';\n  document.getElementById('contentWindow').appendChild(menu);\n});\ndocument.getElementById('ContactUs').addEventListener('click', () => {\n  document.getElementById('contentWindow').innerHTML = '';\n  document.getElementById('contentWindow').appendChild(contactUs);\n});\n\n\n//# sourceURL=webpack://package/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/modules/utilities.js\");\n\n\nconst renderContactUs = () => {\n  const addressContainer = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'address');\n\n  const address = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.default)('p', 'addressP');\n  address.innerHTML = `1234 Delicious St.</ln>Tasty City, Yummy 98765 </ln><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193432.64579915005!2d-73.93862270198392!3d40.753554203112245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f86feb1ed1%3A0x6c2c3c20a0a0e151!2sThe%20Halal%20Guys!5e0!3m2!1sen!2sus!4v1621557070635!5m2!1sen!2sus\" width=\"400\" height=\"300\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>`;\n\n  addressContainer.appendChild(address);\n\n  return addressContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContactUs);\n\n\n//# sourceURL=webpack://package/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/modules/utilities.js\");\n\n\nconst renderFooter = () => {\n  const footerSection = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.default)('footer', 'footerSection');\n  const socialMediaContactText = `<ul class=\"socialmedia list\"> <li class=\"socialmedia item\"> <img class=\"social icon\" id=\"iconFacebook\" src=\"/src/resources/photos/icons/facebook-icon.svg\" /> </li> <li class=\"socialmedia item\"> <img class=\"social icon\" id=\"iconTwitter\" src=\"/src/resources/photos/icons/twitter-icon.svg\" /> </li> <li class=\"socialmedia item\"> <img class=\"social icon\" id=\"iconInstagram\" src=\"/src/resources/photos/icons/instagram-icon.svg\" /> </li> </ul>`;\n  const socialMediaContact = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.default)('section', 'socialMediaContact');\n  socialMediaContact.innerHTML = socialMediaContactText;\n  const rightsText = `<div><p>All Rights Reserved 2021</p></div>`;\n  const rights = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.default)('section', 'rights');\n  rights.innerHTML = rightsText;\n  footerSection.appendChild(socialMediaContact);\n  footerSection.appendChild(rights);\n  return footerSection;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderFooter);\n\n\n//# sourceURL=webpack://package/./src/modules/footer.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/modules/utilities.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/modules/footer.js\");\n\n\n\n\nif (Node.prototype.appendChildren === undefined) {\n  Node.prototype.appendChildren = function () {\n    let children = [...arguments];\n\n    if (children.length == 1 && Object.prototype.toString.call(children[0]) === '[object Array]') {\n      children = children[0];\n    }\n\n    const documentFragment = document.createDocumentFragment();\n    children.forEach((c) => documentFragment.appendChild(c));\n    this.appendChild(documentFragment);\n  };\n}\n\nfunction createSection() {\n  const section = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.default)('section', 'header');\n  const header = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.default)('header', 'title-bar', undefined, undefined);\n  const p = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.default)('p', undefined, 'title', 'Halal Guys');\n  section.appendChild(header);\n  header.appendChild(p);\n  return section;\n}\n\nfunction renderNavBar() {\n  const div = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'nav-bar', undefined);\n  const item1 = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'Menu', 'nav bar item', 'Menu');\n  //   const item2 = createTag('a', undefined, 'nav bar item', 'Locations');\n  const item3 = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'Catering', 'nav bar item', 'Catering');\n  //   const item4 = createTag('a', undefined, 'nav bar item', 'Shop');\n  const item5 = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.default)('button', 'ContactUs', 'nav bar item', 'Contact Us');\n  item1.setAttribute('href', '');\n\n  //   item2.setAttribute('href', '');\n  item3.setAttribute('href', '');\n  //   item4.setAttribute('href', '');\n  item5.setAttribute('href', '');\n  div.appendChildren(item1, item3, item5);\n  return div;\n}\nfunction renderContentWindow() {\n  const contentWindow = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.default)('div', 'contentWindow');\n  contentWindow.appendChildren((0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)());\n  return contentWindow;\n}\n\nfunction loadPage() {\n  const content = document.getElementById('content');\n  const section = createSection();\n  const div = renderNavBar();\n  // const contentWindow = createTag('div', 'contentWindow');\n  const contentWindow = renderContentWindow();\n  const footer = (0,_footer__WEBPACK_IMPORTED_MODULE_2__.default)();\n  content.appendChildren(section, div, contentWindow, footer);\n  return contentWindow;\n}\n\n\n\n\n//# sourceURL=webpack://package/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/modules/utilities.js\");\n\n\nconst renderMenu = () => {\n  const menuContainer = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.default)('ul', 'menu');\n  menuContainer.innerHTML = `<li class=\"menu item\"> <p class=\"menu item name\">Beef Gyro Platter</p> <img class=\"menu item photo\" src=\"/src/resources/photos/food/beef-gyro-platter-530x530.jpeg\" /> </li> <li class=\"menu item\"> <p class=\"menu item name\">Chicken Gyro Platter</p> <img class=\"menu item photo\" src=\"/src/resources/photos/food/chicken-platter-530x530.jpeg\" /> </li> <li class=\"menu item\"> <p class=\"menu item name\">Combo Platter</p> <img class=\"menu item photo\" src=\"/src/resources/photos/food/combo-platter-530x530.jpeg\" /> </li> <li class=\"menu item\"> <p class=\"menu item name\">Falafel Platter</p> <img class=\"menu item photo\" src=\"/src/resources/photos/food/falafel-platter-530x530.jpeg\" /> </li>`;\n  return menuContainer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);\n\n\n//# sourceURL=webpack://package/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/utilities.js":
/*!**********************************!*\
  !*** ./src/modules/utilities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTag)\n/* harmony export */ });\nfunction createTag(tagName, id, className, textInput) {\n  let tag = tagName;\n  tag = document.createElement(tagName);\n  tag.setAttribute('id', id);\n  tag.setAttribute('class', className);\n  tag.textContent = textInput;\n//   tag.innerHTML = htmlInput;\n  return tag;\n}\n\n\n//# sourceURL=webpack://package/./src/modules/utilities.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;