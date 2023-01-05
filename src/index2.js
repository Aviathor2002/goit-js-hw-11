// import './css/styles.css';
// import debounce from 'lodash.debounce';
// import { Notify } from 'notiflix';
// const axios = require('axios').default;
// import { PicturesAPI } from './fetch';

// const DEBOUNCE_DELAY = 300;

// const search = document.querySelector('#search-form');
// const gallery = document.querySelector(`.gallery`);

// const pictureAPI = new PicturesAPI();

// search.addEventListener(`submit`, onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();

//   pictureAPI.query = e.currentTarget.elements.searchQuery.value.trim();
//   if (pictureAPI.query === '') {
//     return Notify.warning('Enter somathing');
//   }

//   pictureAPI.restPage();

//   pictureAPI.fetchGallery().then(data => console.log(data));
// }
