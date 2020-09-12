import { createSelector } from "reselect";

interface IIndexable {
  [key: string]: number;
}

const selectShop = (state: any) => state.shop;

export const selectCollections = createSelector([selectShop], (directory) => directory.collections);

export const selectCollectionsPreview = createSelector([selectCollections], (collections) =>
  Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam: any) =>
  createSelector([selectCollections], (collections) => collections[collectionUrlParam]);
