// Рандом число в диапазоне
const getRandomInRange = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min > max) {
    return alert('Максимальное значение не может быть меньше минимальной!');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

alert(getRandomInRange(10, 458));

// Рандом число в диапазоне с плавающей точкой
const getRandomFractionalNumber = function (min, max, symbol) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min > max) {
    return alert('Максимальное значение не может быть меньше минимальной!');
  }

  return (Math.random() * (max - min + 1) + min).toFixed(symbol);
}

alert(getRandomFractionalNumber(5, 30, 3));
