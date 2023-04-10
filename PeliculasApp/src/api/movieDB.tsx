import axios from 'axios';



const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'39187d450cf47c06b19fd6f841e4050d',
        language: 'es-ES'
    }

});

export default movieDB;