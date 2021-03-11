const form = document.querySelector('.ad-form');
const fieldsets = form.querySelectorAll('fieldset');

const mapFilters = document.querySelector('.map__filters');
const filterItems = mapFilters.querySelectorAll('.map__filter');


form.classList.add('ad-form--disabled');
fieldsets.forEach(element => element.setAttribute('disabled','disabled'));


mapFilters.classList.add('map__filters--disabled');
filterItems.forEach(element => element.setAttribute('disabled','disabled'));

export {form, fieldsets, mapFilters, filterItems};
