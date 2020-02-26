import { SET_MODAL_STATUS, ADD_OFFERS_FAVORITE } from './actionTypes.js';

export const toogleStatusModal = (status) =>{
    return {
        type: SET_MODAL_STATUS,
        value: status
    }
}

export const addOffersFavorite = (offers) =>{
    return {
        type: ADD_OFFERS_FAVORITE,
        value: offers
    }
}