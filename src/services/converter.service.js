import {getCourse, getHistoryInUsd} from '../http/geco.Api'

export const convert = async function(value, id, vs){
    let course = await getCourse({
        id: id,
        vs: vs
    })

    return value*course
}

export const getLabels = function(days){
    return getFormatDates(days, '.')
}

export const getDatasets = async function(days){
    var data1 = await getHistory('bitcoin', days);
    var data2 = await getHistory('ethereum', days);
    return [
        {
            label: "Bitcoin",
            borderColor: "5d5d5e",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white",
            backgroundColor: "4d4d4e",
            data: data1
            },
            {
            label: "Ethereum",
            borderColor: "#e9bd86",
            pointBackgroundColor: "white",
            pointBorderColor: "white",
            borderWidth: 1,
            backgroundColor: "#c99d66",
            data: data2
        }
    ]
}

const getFormatDates = function (days, separator){
    separator = separator || '-';
    let dates = [];

    for (let i = 0; i < days; i++){
        let date = new Date();
        date.setDate(date.getDate() - i - 1)
        
        let dateStr = date.getDate() + separator + (date.getMonth()+1) + separator + date.getFullYear()
        dates.push(dateStr)
    }


    return dates.reverse()
}

const getHistory = async function(id, days){
    let dates = getFormatDates(days)
    let prices = []

    for (const date of dates) {
        const price = await getHistoryInUsd(id, date);
        prices.push(price)
    }

    return prices
}