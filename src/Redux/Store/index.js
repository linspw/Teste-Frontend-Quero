import { createStore } from 'redux';
import { Reducers } from '../Reducers';

let initState = {}
const persistedState = localStorage.getItem('reduxState')
if (persistedState) {
  initState = JSON.parse(persistedState)
}


const Store = createStore(Reducers, initState);

Store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(Store.getState()))
})

export default Store;