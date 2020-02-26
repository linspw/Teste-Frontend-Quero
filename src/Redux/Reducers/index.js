import { combineReducers } from 'redux';
import { InterfaceReducer } from './interfaceReducers';
import { OffersReducer } from './offersReducers';

export const Reducers = combineReducers({
    InterfaceState: InterfaceReducer,
    OffersState: OffersReducer
});