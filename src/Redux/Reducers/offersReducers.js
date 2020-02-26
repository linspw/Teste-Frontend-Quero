import { ADD_OFFERS_FAVORITE, SHOW_OFFERS_FAVORITE } from '../Actions/actionTypes';

const OffersInitial = {
    favorites: []
}

function OffersReducer (state = OffersInitial, action){
    switch (action.type){
        case SHOW_OFFERS_FAVORITE:
            return state.favorites;
        case ADD_OFFERS_FAVORITE:
            return {...state, favorites: state.favorites.concat(action.value)};
        default:
            return state;
    }
}

export { OffersReducer };