import {getRandomInRange, getRandomFractionalNumber, getRandomItem, getRandomItemNoRepeat} from './util'

// Временые данные
const TITLES = ['Большая квартира', 'Современная квартира', 'Уютная квартира', 'Квартира у моря'];
const ADDRESS = ['ул. Изюмская д.45', 'ул. Изюмская д.27', 'ул. Чечерский проезд д.2', 'ул. Янгеля д.7', 'ул. Изюмская д.25/2']
const TYPE = ['palace', 'flat', 'house', 'bungalow'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const DESCRIPTION = ['Спокойный район', 'Рядом школа', 'Хорошие соседи', '5 минут от метро'];


// Функция создающий обьект
const isAd = () => {
  return {
    author : {
      avatar: 'img/avatars/user0' + getRandomInRange(1, 8) + '.png',
    },

    offer : {
      title: getRandomItem(TITLES),
      address: getRandomItem(ADDRESS),
      price: getRandomInRange(10000, 60000),
      type: getRandomItem(TYPE),
      rooms: getRandomInRange(1, 6),
      guests: getRandomInRange(1, 10),
      checkin: getRandomItem(CHECKIN),
      checkout: getRandomItem(CHECKOUT),
      features: getRandomItemNoRepeat(FEATURES),
      description: getRandomItem(DESCRIPTION),
      photos: getRandomItemNoRepeat(PHOTOS),
    },

    location : {
      x: getRandomFractionalNumber(35.65000, 35.70000, getRandomInRange(1,4)),
      y: getRandomFractionalNumber(139.70000, 139.80000, getRandomInRange(1,4)),
    },

  };
};

// Количество элементов в массиве объявлений
const ADS_TOTAL = 10;

// Создаем массив объявлений поблизости
const ads = new Array(ADS_TOTAL).fill(0).map(() => isAd());
