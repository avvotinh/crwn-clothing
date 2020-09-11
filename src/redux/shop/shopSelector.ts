import { createSelector } from "reselect";

const selectShop = (state: any) => state.shop;

export const selectCollections = createSelector([selectShop], (directory) => directory.collections);
