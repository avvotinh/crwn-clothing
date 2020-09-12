import React from "react";
import { useDispatch } from "react-redux";

import "./collectionItem.scss";
import Button from "../Button/Button";
import { addItem } from "../../redux/cart/cartActions";

const CollectionItem = ({ item }: any) => {
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <Button mode="dark" type="button" inverted onClick={() => dispatch(addItem(item))}>
        Add to cart
      </Button>
    </div>
  );
};

export default CollectionItem;
