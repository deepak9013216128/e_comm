import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../component/checkout-item/checkout-item.component';

import {CheckoutPageContainer,
    ChecoutHeader,
    HeaderBlock,
    Total,
    TestWarning,} from './checkout.styles'; 
import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component';

const Checkout = ({cartItems,total})=> (
    <CheckoutPageContainer>
        <ChecoutHeader >
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Descriptions</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </ChecoutHeader>
        {
            cartItems.map(cartItem=>
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <Total>
            <span>TOTAL: {total}</span>
        </Total>
        <TestWarning>
            *Please use following test credit card for payment*
            <br />
            4242 4242 4242 - Exp: 1/21 - Cvv: 123
        </TestWarning>
        <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
)

const mapStateToProops = createStructuredSelector({
    cartItems: selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProops)(Checkout);