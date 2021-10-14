import axios from 'axios'

export const geco = axios.create({
    baseURL: `https://api.coingecko.com/api/v3/`
})