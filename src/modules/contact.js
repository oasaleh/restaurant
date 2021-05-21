import createTag from './utilities';

const renderContactUs = () => {
  const addressContainer = createTag('div', 'address');

  const address = createTag('p', 'addressP');
  address.innerHTML = `1234 Delicious St.</ln>Tasty City, Yummy 98765 </ln><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193432.64579915005!2d-73.93862270198392!3d40.753554203112245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f86feb1ed1%3A0x6c2c3c20a0a0e151!2sThe%20Halal%20Guys!5e0!3m2!1sen!2sus!4v1621557070635!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;

  addressContainer.appendChild(address);

  return addressContainer;
};

export default renderContactUs;
