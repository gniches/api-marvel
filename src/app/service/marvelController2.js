import axios from 'axios';

const apiMarvel = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/characters?apikey=49dd4055952e265a4f387f429eb661b0&hash=891aef43916292f0f9ee9a78dac6dd9d&ts=1609890812920'
});

export default apiMarvel;