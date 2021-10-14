import {getCourse} from '../http/geco.Api'

export const getLabels = function(money){
    return money.map(function(item) {
        return item.name;
    });
}

export const getDatasets = function(money){
    return [{
        backgroundColor: ['#eddaab', '#b8a26a', '#756b3e'],
        data: money.map(function(item) {
            return item.value;
        })
    }]
}

export const getCaseValue = async (money) => {
    let caseValue = 0;
    
    caseValue += money[0].value;
    
    let btcInUsd = await getCourse({
        id: 'bitcoin',
        vs: 'usd'
    });
    caseValue += btcInUsd*money[1].value;
    
    let ethInUsd = await getCourse({
        id: 'ethereum',
        vs: 'usd'
    });
    caseValue += ethInUsd*money[2].value;
    
    return caseValue;
}