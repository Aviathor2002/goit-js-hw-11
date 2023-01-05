// export { fetchGallery };
// import { Notify } from 'notiflix';
// import axios from 'axios';

// const API_KEY = `32379526-a8c253dffb9e51dd26df65ed0`;

// axios.defaults.baseURL = `https://pixabay.com/api/`;

// export class PicturesAPI {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   async fetchGallery() {
//     const options = new URLSearchParams({
//       key: API_KEY,
//       q: this.searchQuery,
//       image_type: `photo`,
//       orientation: `horizontal`,
//       safesearch: `true`,
//       page: (this.page = 1),
//       per_page: 40,
//     });

//     const { data } = await axios(`?${options}`);
//     console.log(data);
//     this.page += 1;
//     return data;
//   }

//   restPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.page;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
