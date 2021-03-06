import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.action';

import {CartDropdownContainer,
        CartItemsContainer,
        EmptyMessageContainer,
        ButtonContainer} from'./cart-dropdown.styles';

const CartDropDown = ({cartItems,history,dispatch}) =>(
    <CartDropdownContainer>
        <CartItemsContainer >
        {
            cartItems.length?
            (cartItems.map(cartItem =><CartItem key={cartItem.id} item={cartItem} />))
            :(<EmptyMessageContainer >Your Cart is Empty</EmptyMessageContainer>)
        }
        </CartItemsContainer>
        <ButtonContainer onClick={ ()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden())
            }
        }>
        GO TO CHECKOUT</ButtonContainer>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));