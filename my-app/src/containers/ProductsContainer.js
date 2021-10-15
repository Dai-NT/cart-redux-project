import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import ProductItem from '../components/ProductItem';
import PropTypes from 'prop-types';
import {addToCart} from '../actions/index';
import {changeMessage} from '../actions/index';

class ProductsContainer extends Component {
  render(){
    var { products, onAddToCart, onChangeMessage } = this.props;

    var elementProducts = products.map((product, index) => {
        return <ProductItem key = {index}
                            product = {product}
                            onAddToCart = {onAddToCart}
                            onChangeMessage = {onChangeMessage}
                />  
    });
    return (
        <Products>
            { elementProducts }
        </Products>
    );
}
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(addToCart(product, 1))
        },
        onChangeMessage: (message) => {
            dispatch(changeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
