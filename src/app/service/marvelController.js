import axios from 'axios';

class MarvelController {
    constructor() {
        this.urlBase = `https://gateway.marvel.com/v1/public/characters?apikey=49dd4055952e265a4f387f429eb661b0&hash=891aef43916292f0f9ee9a78dac6dd9d&ts=1609890812920`;
        this.registrosPorPagina = 100;
    }


    // http://localhost:3000/personagens?pagina=1
    index = (req, res) => {
        const { pagina } = req.query;

        let offset = 0;

        if (pagina && pagina > 1) {
            offset = ((pagina -1) * this.registrosPorPagina) + 1;
        }

        const url = this.urlBase + `&limit=${this.registrosPorPagina}&offset=${offset}`;

        axios.get(url).then(response => {
           return res.json(response.data.data);
        });

        return res.json(url);
    }
}

export default new MarvelController();