import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v3/',
  headers: {
    'X-RapidAPI-Key': '0281c8698dmsh60d8c916561e88bp1b0429jsnaacc2158fc71',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
  },
});
