import { ActionTypes } from "../constants/ActionTypes";


const initialState = {
    
    isDetailsTriggered:false,
    flagDetailsID:""

}

export const productReducer = (state = initialState, { type, payload }) => {
    console.log(payload)
    switch (type) {
        case (ActionTypes.SET_DETAILS_TRIGGERED):
            return {
                ...state,
                isDetailsTriggered: payload
            };
        case (ActionTypes.DISPLAYED_FLAG_ID):
            return {
                ...state,
                flagDetailsID: payload
            };
        default:
            return state;
    }
}