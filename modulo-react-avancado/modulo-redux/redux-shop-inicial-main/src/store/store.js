import { createStore, combineReducers } from "redux";
import cartReducer from './reducers/cart'

const rootReducer = combineReducers({
    CartProducts: cartReducer
})

const store = createStore(rootReducer)

export default store