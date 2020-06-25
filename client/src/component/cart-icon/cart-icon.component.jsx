import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cart.action';
import {selectCartItemCount} from '../../redux/cart/cart.selectors';

import {CartIconContainer,ShoppingIcon,ItemCount} from  './cart-icon.styles';

const CartIcon = ({toggleCartHidden,itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
)

const mapDispatchProps = (dispatch)=>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})

export default connect(mapStateToProps,mapDispatchProps)(CartIcon);