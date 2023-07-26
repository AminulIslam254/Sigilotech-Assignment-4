import {ActionTypes} from '../constants/ActionTypes.js'


export const setDetailsTriggered=(products)=>{
    return{
        type:ActionTypes.SET_DETAILS_TRIGGERED,
        payload:products,
    }
}
export const displayedFlagID=(products)=>{
    return{
        type:ActionTypes.DISPLAYED_FLAG_ID,
        payload:products,
    }
}
