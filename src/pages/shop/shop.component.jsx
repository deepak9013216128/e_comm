import React from 'react';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';

import CollectionsOverview from '../../component/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import WithSpinner from '../../component/with-spinner/with-spinner.component';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.action';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShowPage extends React.Component{

    state = {
        loading: true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const collectionRef = firestore.collection('collections');
         const {updateCollections} = this.props;
        
        collectionRef.onSnapshot(async snapshot =>{
            const collectionMap = convertCollectionSnapshotToMap(snapshot)
            updateCollections(collectionMap)
            this.setState({loading: false})
        })
    }

    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render = {(props)=> <CollectionPageWithSpinner isLoading={loading} {...props} />} />
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