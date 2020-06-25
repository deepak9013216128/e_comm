import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selector';
import WithSpinner from '../../component/with-spinner/with-spinner.component';
import CollectionsPage from './collection.component';

const mapStatetoProps = createStructuredSelector({
   isLoading: (state) => !selectIsCollectionsLoaded(state)
})

const CollectionsPageContainer = compose(
	connect(mapStatetoProps),
	WithSpinner
)(CollectionsPage);

export default CollectionsPageContainer;