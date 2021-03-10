import {ads} from './data.js';
import {form, fieldsets, mapFilters, filterItems} from './status-page.js';

//Подключаем карту
const L = window.L;
const map = L.map('map-canvas')
  .on('load', () => {
    form.classList.remove('ad-form--disabled');
    fieldsets.forEach(element => element.removeAttribute('disabled'));
    mapFilters.classList.remove('map__filters--disabled');
    filterItems.forEach(element => element.removeAttribute('disabled'));
  })
  .setView({
    lat: 35.6895000,
    lng: 139.6917100,
  }, 11);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//Добавляем маркер
const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: 35.6895000,
    lng: 139.6917100,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.addTo(map);

//Выбор адреса на карте синхронизируются с формой
const address = document.querySelector('#address');
address.value = `${mainMarker._latlng.lat}, ${mainMarker._latlng.lng}`;

mainMarker.on('moveend', function () {
  address.value = `${mainMarker._latlng.lat.toFixed(5)}, ${mainMarker._latlng.lng.toFixed(5)}`;
});

//Создания попапа для балуна метки
const createCustomPopup =  function (element) {
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = cardTemplate.cloneNode(true);

  popupElement.querySelector('.popup__avatar').src = element.author.avatar;
  popupElement.querySelector('.popup__title').textContent = element.offer.title;
  popupElement.querySelector('.popup__text--address').textContent = element.offer.address;
  popupElement.querySelector('.popup__text--price').textContent = `${element.offer.price} ₽/ночь`;

  switch (element.offer.type) {
    case 'flat' :
      element.offer.type = 'Квартира'; break
    case 'bungalow' :
      element.offer.type = 'Бунгало'; break
    case 'house' :
      element.offer.type = 'Дом'; break
    case 'palace' :
      element.offer.type = 'Дворец'; break
    default :
      element.offer.type = 'Непонятно';
  }
  popupElement.querySelector('.popup__type').textContent = element.offer.type;
  popupElement.querySelector('.popup__text--capacity').textContent = element.offer.rooms + ' комнаты для ' + element.offer.guests + ' гостей';
  popupElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + element.offer.checkin + ', выезд до ' + element.offer.checkout;
  popupElement.querySelector('.popup__description').textContent = element.offer.description;

  return popupElement;
};

//Генерация меток
ads.forEach((element) =>
{
  const lat = element.location.x
  const lng = element.location.y

  const pinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      pinIcon,
    },
  );
  marker
    .addTo(map)
    .bindPopup(
      createCustomPopup(element),
      {
        keepInView: true,
      },
    );
},
);
