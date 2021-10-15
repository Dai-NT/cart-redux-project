import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as Messages from '../constants/Messages';
import {deleteProductInCart, 
    changeMessage, 
    updateIncreaseProductInCart, 
    updateDecreaseProductInCart } from '../actions/index';

class CartContainer extends Component {
  render(){
      var { cart } = this.props;

//--------------------------------------
    // Tính tổng số tiền
    //   var total = cart.map((item) => {
    //       return (
    //           item.product.price * item.quantity
    //       )
    //   });
    //   var totals = total.reduce(function(previousValue, currentValue){
    //     return previousValue + currentValue;
    // }, 0);
    var totals = 0;
    for (var i = 0; i < cart.length; i++) {
        totals += cart[i].product.price * cart[i].quantity
    } 

    return (
        <Cart>
            { this.showCartItem(cart) }
            <CartResult totals = {totals}/>
        </Cart>
    );
}

    showCartItem = (cart) => {
        var result = <tr>
        <td>{Messages.MSG_CART_EMPTY}</td>
        </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem 
                        key = {index}
                        item = {item}
                        onDeleteProductInCart = { this.props.onDeleteProductInCart }
                        onChangeMessage = { this.props.onChangeMessage }
                        onUpdateIncreaseProductInCart = { this.props.onUpdateIncreaseProductInCart}
                        onUpdateDecreaseProductInCart = { this.props.onUpdateDecreaseProductInCart }
                    />
                )
            });
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }),
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
}

const mapStateToProps = (state) => {
    return {  
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onDeleteProductInCart: (product) => {
            dispatch(deleteProductInCart(product))
        },
        onChangeMessage: (message) => {
            dispatch(changeMessage(message))
        },
        onUpdateIncreaseProductInCart: (product, quantity) => {
            dispatch(updateIncreaseProductInCart(product, quantity))
        },
        onUpdateDecreaseProductInCart: (product, quantity) => {
            dispatch(updateDecreaseProductInCart(product, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
