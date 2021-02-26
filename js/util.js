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

  const sumElements = getRandomInRange(0, arr.length - 1);

  return arr.slice(sumElements)
}

export {getRandomInRange, getRandomFractionalNumber, getRandomItem, getRandomItemNoRepeat};
