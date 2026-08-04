import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
    key: '57006451-3abf85bc482cc3cca5bb0ea9f',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true'};

export function getImagesByQuery(query) {
   return axios.get(`?q=${query}`)
    .then(response => response.data)

}

