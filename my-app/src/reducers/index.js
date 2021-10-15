import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import messages from './messages';

const appReducers = combineReducers({
    products,
    cart,
    messages
})

export default appReducers;