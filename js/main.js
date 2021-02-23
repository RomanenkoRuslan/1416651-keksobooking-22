// Рандом число в диапазоне
const getRandomInRange = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min > max) {
    return alert('Максимальное значение не может быть меньше минимальной!');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Рандом число в диапазоне с плавающей точкой
const getRandomFractionalNumber = function (min, max, symbol) {
  if (min > max) {
    return alert('Максимальное значение не может быть меньше минимальной!');
  }

  return (Math.random() * (max - min) + min).toFixed(symbol);
}

// Рандом элемент в массиве
const getRandomItem = function (arr) {
  const randomItemIndex = Math.floor(Math.random() * arr.length);
  const randomItem = arr[randomItemIndex];
  return randomItem;
};

// Рандом элементы в массиве без повторения и с рандом количеством
const getRandomItemNoRepeat = function (arr) {
  for (let i = 0 ; i < arr.length; i++) {
    let r = Math.floor(Math.random() * (arr.length - i)) + i;
    let city = arr[r];
    arr[r] = arr[i];
    arr[i] = city;
  }

  let sumElements = getRandomInRange(0, arr.length - 1);

  return arr.slice(sumElements)
}


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
const ad = () => {
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
const ads = new Array(ADS_TOTAL).fill(0).map(() => ad());

