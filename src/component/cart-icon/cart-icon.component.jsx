import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cart.action';
import {selectCartItemCount, selectCartItems} from '../../redux/cart/cart.selectors';

import {ReactComponent as ShoppingBag} from '../assets/shopping-bag.svg';

import './cart-icon.style.scss';

const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingBag className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchProps = (dispatch)=>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})

export default connect(mapStateToProps,mapDispatchProps)(CartIcon);