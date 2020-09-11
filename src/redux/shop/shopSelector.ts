import { createSelector } from "reselect";

interface IIndexable {
  [key: string]: number;
}
const COLLECTION_ID_MAP: IIndexable = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state: any) => state.shop;

export const selectCollections = createSelector([selectShop], (directory) => directory.collections);

export const selectCollectionsPreview = createSelector([selectCollections], (collections) =>
  Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam: any) =>
  createSelector([selectCollections], (collections) => collections[collectionUrlParam]);
