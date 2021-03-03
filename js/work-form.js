const typeLodging = document.querySelector('#type');
const price = document.querySelector('#price');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');
const title = document.querySelector('#title');
const address = document.querySelector('#address');
const avatar = document.querySelector('#avatar');

//Изменяем минимальное значение в price в зависимости выбора typeLodging
typeLodging.addEventListener('change', function () {
  switch (typeLodging.value) {
    case 'bungalow' :
      price.placeholder = 0;
      price.min = 0; break
    case 'flat' :
      price.placeholder = 1000;
      price.min = 1000; break
    case 'house' :
      price.placeholder = 5000;
      price.min = 5000; break
    case 'palace' :
      price.placeholder = 10000;
      price.min = 10000; break
  }
});

//Правила для price
price.setAttribute('required', 'required');
price.max = 1000000;

//Изменяем значение в timeout в зависимости выбора timein и наоборот
timein.addEventListener('change', function () {
  switch (timein.value) {
    case '12:00' :
      timeout.value = timein.value; break
    case '13:00' :
      timeout.value = timein.value; break
    case '14:00' :
      timeout.value = timein.value; break
  }
});

timeout.addEventListener('change', function () {
  switch (timeout.value) {
    case '12:00' :
      timein.value = timeout.value; break
    case '13:00' :
      timein.value = timeout.value; break
    case '14:00' :
      timein.value = timeout.value; break
  }
});

//Правила для title
title.setAttribute('required', 'required');
title.setAttribute('minlength', '30');
title.setAttribute('maxlength', '100');


//Правила для address
address.setAttribute('disabled', 'disabled');

//Правила для avatar
avatar.setAttribute('accept', 'image/*');
