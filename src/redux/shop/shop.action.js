import ShopActionTypes from './shop.types';
export const updateCollections = collectionMap => ({
    type: ShopActionTypes.UPDATES_COLLECTIONS,
    payload: collectionMap
});