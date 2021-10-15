import React, { Component } from 'react';
import * as Messages from '../constants/Messages';

class CartItem extends Component {
  render(){
      var { item } = this.props;
      var { product, quantity } = item;
    return ( 
        <tr>
            <th scope="row">
                <img src={ product.image }
                    alt="" className="img-fluid z-depth-0" />
            </th>
            <td>
                <h5>
                    <strong>{product.name}</strong>
                </h5>
            </td>
            <td>{product.price}$</td>
            <td className="center-on-small-only">
                <span className="qty"> { quantity } </span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                            onClick = { () => this.onUpdateDecreaseProductInCart(product, quantity)}
                            >
                        <span>—</span>
                    </label>
                    <label className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
                            onClick = { () => this.onUpdateIncreaseProductInCart(product, quantity)}
                            >
                        <span>+</span>
                    </label>
                </div>
            </td>
            <td>{ this.showSubTotal(product.price, quantity) }$</td>
            <td>
                <button 
                    type="button" 
                    className="btn btn-sm btn-primary waves-effect waves-light" 
                    data-toggle="tooltip" 
                    data-placement="top"
                    title="" 
                    data-original-title="Remove item"
                    onClick = { () => this.onDeleteProductInCart(product) }
                    >
                    X
                </button>
            </td>
        </tr>
    );
  }

  showSubTotal = (price, quantity) => {
    return price * quantity;
  }

  onDeleteProductInCart = (product) => {
      this.props.onDeleteProductInCart(product);
      this.props.onChangeMessage(Messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
  }

  onUpdateIncreaseProductInCart = (product, quantity) => {
      this.props.onUpdateIncreaseProductInCart(product, quantity);
      this.props.onChangeMessage(Messages.MSG_UPDATE_CART_SUCCESS);

  }

  onUpdateDecreaseProductInCart = (product, quantity) => {
    this.props.onUpdateDecreaseProductInCart(product, quantity);
    this.props.onChangeMessage(Messages.MSG_UPDATE_CART_SUCCESS);
  }

}

export default CartItem;
