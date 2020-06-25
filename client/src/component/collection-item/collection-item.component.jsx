import React from 'react';
import {connect} from 'react-redux';

import {addItem} from '../../redux/cart/cart.action'

import {CollectionItemContainer,
        ImageConatiner,
        CollectionFooter,
        Name,
        Price,
        CustomButtonContainer} from './collection-item.styles';

const CollectionItem = ({item,addItem}) =>{
    const {name,price,imageUrl} = item
    return(
    <CollectionItemContainer>
        <ImageConatiner imageUrl={imageUrl} className='image' />
        <CollectionFooter>
            <Name>{name}</Name>
            <Price>{price}</Price>
        </CollectionFooter>
        <CustomButtonContainer onClick={()=>addItem(item)}> 
            Add To Cart 
        </CustomButtonContainer>
    </CollectionItemContainer>
)}

const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);