import React from 'react';
import {withRouter} from 'react-router-dom';
import {MenuItemContainer,BackgroundImageConatainer,ContentContainer,Title,SubTitle} from './menu-item.styles'

const MenuItem = ({title,imageUrl,size,history,linkUrl,match})=>(
    <MenuItemContainer className={`${size} menu-item`} onClick={()=>(
        history.push(`${match.url}${linkUrl}`)
    )} >
        <BackgroundImageConatainer 
            className='background-image'
            imageUrl = {imageUrl}
        />
        <ContentContainer>
            <Title>{title.toUpperCase()}</Title>
            <SubTitle>Shop Now</SubTitle>
        </ContentContainer>
    </MenuItemContainer>
);
export default withRouter(MenuItem);