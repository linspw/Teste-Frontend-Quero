import { SHOW_MODAL_STATUS, SET_MODAL_STATUS } from '../Actions/actionTypes';

const designInitialStatus = {
    Modal: {
        status: false
    }
}

/*Reducer que retorna um estado puro para o Redux Store*/

function InterfaceReducer (state = designInitialStatus, action){
    switch (action.type){
        case SHOW_MODAL_STATUS:
            return state.Modal;
        case SET_MODAL_STATUS:
            return {...state, Modal:{status:action.value}};
        default:
            return state;
    }
}

export { InterfaceReducer };