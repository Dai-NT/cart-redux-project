import * as types from '../constants/ActionTypes';

export const addToCart = (product, quantity) => ({
    type: types.ADD_TO_CART, 
    product,
    quantity
})

export const changeMessage = (message) => ({
    type: types.CHANGE_MESSAGE,
    message,
})

export const deleteProductInCart = (product) => ({
    type: types.DELETE_PRODUCT_IN_CART,
    product
})

export const updateIncreaseProductInCart = (product, quantity) => ({
    type: types.UPDATE_INCREASE_PRODUCT_IN_CART,
    product, 
    quantity
})

export const updateDecreaseProductInCart = (product, quantity) => ({
    type: types.UPDATE_DECREASE_PRODUCT_IN_CART,
    product, 
    quantity
})

