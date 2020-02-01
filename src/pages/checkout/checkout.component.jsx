import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../component/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component';

import './checkout.style.scss'; 

const Checkout = ({cartItems,total})=> (
    <div className='checkout-page'>
        <div className='checkout-header' >
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Descriptions</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem=>
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <div className='total'>
            <span>TOTAL: {total}</span>
        </div>
        <div className='test-warring' >
            *Please use following test credit card for payment*
            <br />
            4242 4242 4242 - Exp: 1/21 - Cvv: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProops = createStructuredSelector({
    cartItems: selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProops)(Checkout);