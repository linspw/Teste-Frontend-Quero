import { combineReducers } from 'redux';
import { InterfaceReducer } from './interfaceReducers';
import { OffersReducer } from './offersReducers';

/*Juntando todos os Reducers para disponibilizar para os componentes*/
export const Reducers = combineReducers({
    InterfaceState: InterfaceReducer,
    OffersState: OffersReducer
});