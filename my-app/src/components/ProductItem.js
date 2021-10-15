import React, { Component } from 'react';
import * as Messages from '../constants/Messages'

class ProductItem extends Component {
  render(){
    
    var {product} = this.props;
    var { image, name, description, price, rating } = product;

    var showRating = (rating) => {
        var result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<i className="fa fa-star" key = {i}></i>)
        }
        for (var j = 1; j <= (5-rating); j++) {
            result.push(<i className="fa fa-star-o" key = {j+5}></i>)
        }   
        return result
    }
    
    return (
        <div className="col-lg-4 col-md-6 mb-r">
            <div className="card text-center card-cascade narrower">
                <div className="view overlay hm-white-slight z-depth-1">
                    <img src= { image }
                        className="img-fluid" alt="" />
                    <a href = " ">
                        <div className="mask waves-light waves-effect waves-light"></div>
                    </a>
                </div>
                <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                            <a href = " ">{ name }</a>
                        </strong>
                    </h4>
                    <ul className="rating">
                        <li>
                            { showRating(rating) }
                        </li>
                    </ul>
                    <p className="card-text">
                        { description }
                    </p>
                    <div className="card-footer">
                        <span className="left">{price}$</span>
                        <span className="right">
                            <p className="btn-floating blue-gradient" 
                                data-toggle="tooltip" 
                                data-placement="top" 
                                title="" 
                                data-original-title="Add to Cart"
                                onClick = { () => this.onAddToCart(product) }
                            >
                                <i className="fa fa-shopping-cart"></i>
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </div> 
    );
  };

  onAddToCart = (product) => {
      this.props.onAddToCart(product)
      this.props.onChangeMessage(Messages.MSG_ADD_TO_CART_SUCCESS)
  }

}

export default ProductItem;
