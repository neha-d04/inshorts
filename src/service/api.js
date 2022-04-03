import axios from 'axios';
const URL = 'https://inshort-server.herokuapp.com';
export const setNews = async ()=>{
    try {
        return await axios.get(`${URL}/news`)
    } catch (error) {
        console.log('Error while calling getNews API',error);
    }
}