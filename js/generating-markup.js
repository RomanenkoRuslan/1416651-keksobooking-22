import { ads } from './data.js';

const card = document.querySelector('#card').content;
const popup =  card.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');


//Функция генерация элемента
const makeElement = function (tagName, className, text) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};


//Функция генерации обьявлении
const createAd = function (ad) {
  const avatar = makeElement('img', 'popup__avatar');
  avatar.src = ad.author.avatar;
  mapCanvas.appendChild(avatar);

  const title = makeElement('h3', 'popup__title', ad.offer.title);
  mapCanvas.appendChild(title);

  const address = makeElement('p', 'popup__text--address', ad.offer.address);
  mapCanvas.appendChild(address);

  const price = makeElement('p', 'popup__text--price', ad.offer.price + ' ₽/ночь');
  mapCanvas.appendChild(price);

  const type = makeElement('h4', 'popup__type');
  switch (ad.offer.type) {
    case 'flat' :
      ad.offer.type = 'Квартира'; break
    case 'bungalow' :
      ad.offer.type = 'Бунгало'; break
    case 'house' :
      ad.offer.type = 'Дом'; break
    case 'palace' :
      ad.offer.type = 'Дворец'; break
    default :
      ad.offer.type = 'Непонятно';
  }
  type.textContent = ad.offer.type;
  mapCanvas.appendChild(type);

  const capacity = makeElement('p', 'popup__text--capacity');
  capacity.textContent = ad.offer.rooms + ' комнаты для ' + ad.offer.guests + ' гостей';
  mapCanvas.appendChild(capacity);

  const time = makeElement('p', 'popup__text--time');
  time.textContent = 'Заезд после ' + ad.offer.checkin + ', выезд до ' + ad.offer.checkout;
  mapCanvas.appendChild(time);

  const features = makeElement('ul', 'popup__features');
  mapCanvas.appendChild(features);

  const arrFeatures = ad.offer.features;
  for (let i = 0; i < arrFeatures.length; i++) {
    const feature = makeElement('li', 'popup__feature');
    feature.classList.add('popup__feature--' + arrFeatures[i]);
    features.appendChild(feature);
  }

  const description = makeElement('p', 'popup__description', ad.offer.description);
  mapCanvas.appendChild(description);

  const photos = makeElement('div', 'popup__photos');
  mapCanvas.appendChild(photos);

  const arrPhotos = ad.offer.photos;
  for (let i = 0; i < arrPhotos.length; i++) {
    const photo = makeElement('img', 'popup__photo');
    photo.classList.add('popup__photo');
    photo.src = ad.arrPhotos[i];
    photos.appendChild(photo);
  }
};

export {createAd};
