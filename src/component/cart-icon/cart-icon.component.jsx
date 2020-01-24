import React from 'react';
import {connect} from 'react-redux'

import toggleCartHidden from '../../redux/cart/cart.action'

import {ReactComponent as ShoppingBag} from '../assets/shopping-bag.svg';

import './cart-icon.style.scss';

const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingBag className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchProps = (dispatch)=>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchProps)(CartIcon);