import {createStore,combineReducers, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import { shoppingCart } from '../reducers/shoppingCart';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    shoppingCart:shoppingCart,
})
export const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))