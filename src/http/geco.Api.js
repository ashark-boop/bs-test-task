import {geco} from './index.js'

export const getCourse = async function (query) {
    const response = await geco.get(`/simple/price`, {params: {
        ids: query.id,
        vs_currencies: query.vs
    }})

    let data = response.data;
    for (let key in data){
        if (key == query.id){
            var obj = data[key]
        }
    }
    for (let key in obj){
        if (key == query.vs){
            var price = obj[key]
        }
    }

    return price
}

export const getHistoryInUsd = async function(id, date) {
    const response = await geco.get(`/coins/${id}/history`, {params: {
        date: date,
    }})

    let data = response.data.market_data.current_price.usd
    return data
}