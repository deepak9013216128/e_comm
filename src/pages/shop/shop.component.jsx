import React from 'react';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';

import CollectionsOverview from '../../component/collections-overview/collections-overview.component';
import Collection from '../collection/collection.component';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.action';

class ShowPage extends React.Component{

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const collectionRef = firestore.collection('collections');
         const {updateCollections} = this.props;
        
        collectionRef.onSnapshot(async snapshot =>{
            const collectionMap = convertCollectionSnapshotToMap(snapshot)
            updateCollections(collectionMap)
        })
    }

    render(){
        const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={Collection} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => (
        dispatch(updateCollections(collectionMap))
    )
})
 
export default connect(null,mapDispatchToProps)(ShowPage);