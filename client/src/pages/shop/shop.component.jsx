import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';

import CollectionsOverviewContainer from '../../component/collections-overview/collections-overview.container';
import CollectionsPageContainer from '../collection/collection.container';


import { fetchCollectionsStart} from '../../redux/shop/shop.action';

const ShopPage = ({fetchCollectionsStart,match}) => {
  useEffect(()=>{
    fetchCollectionsStart();
  },[fetchCollectionsStart])

  return (
    <div className='shop-page'>
      <Route 
        exact 
        path={`${match.path}`} 
        component={CollectionsOverviewContainer}
      />
      <Route 
      	path={`${match.path}/:collectionId`} 
       	component={CollectionsPageContainer}
    	/>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})
 
export default connect(null,mapDispatchToProps)(ShopPage);