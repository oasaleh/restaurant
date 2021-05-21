import createTag from './utilities';

const renderFooter = () => {
  const footerSection = createTag('footer', 'footerSection');
  const socialMediaContactText = `<ul class="socialmedia list"> <li class="socialmedia item"> <img class="social icon" id="iconFacebook" src="/src/resources/photos/icons/facebook-icon.svg" /> </li> <li class="socialmedia item"> <img class="social icon" id="iconTwitter" src="/src/resources/photos/icons/twitter-icon.svg" /> </li> <li class="socialmedia item"> <img class="social icon" id="iconInstagram" src="/src/resources/photos/icons/instagram-icon.svg" /> </li> </ul>`;
  const socialMediaContact = createTag('section', 'socialMediaContact');
  socialMediaContact.innerHTML = socialMediaContactText;
  const rightsText = `<div><p>All Rights Reserved 2021</p></div>`;
  const rights = createTag('section', 'rights');
  rights.innerHTML = rightsText;
  footerSection.appendChild(socialMediaContact);
  footerSection.appendChild(rights);
  return footerSection;
};

export default renderFooter;
