import { ADD_OFFERS_FAVORITE, SHOW_OFFERS_FAVORITE, REMOVE_OFFERS_FAVORITE } from '../Actions/actionTypes';

const OffersInitial = {
    favorites: []
}


/*Reducer que retorna um estado puro para o Redux Store*/
function OffersReducer (state = OffersInitial, action){
    switch (action.type){
        case SHOW_OFFERS_FAVORITE:
            return state.favorites;
        case ADD_OFFERS_FAVORITE:
            /*let arrayConcat = state.favorites.concat(action.value);
            arrayConcat.map((e, i)=>{

            });*/
            return {...state, favorites: state.favorites.concat(action.value)};
        case REMOVE_OFFERS_FAVORITE:
            let array = state.favorites.slice();
            array.splice(action.value, 1);
            return {...state, favorites: array};  
        default:
            return state;
    }
}

export { OffersReducer };