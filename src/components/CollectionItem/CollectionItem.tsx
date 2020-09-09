import React from "react";
import { connect } from "react-redux";

import "./collectionItem.scss";
import Button from "../Button/Button";
import { addItem } from "../../redux/cart/cartActions";

interface ICollectionItemProps {
  key: number;
  item: any;
  addItem: Function;
}

class CollectionItem extends React.Component<ICollectionItemProps> {
  constructor(props: ICollectionItemProps) {
    super(props);
  }

  render() {
    const { item, addItem } = this.props;

    return (
      <div className="collection-item">
        <div
          className="image"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        ></div>
        <div className="collection-footer">
          <span className="name">{item.name}</span>
          <span className="price">{item.price}</span>
        </div>
        <Button
          mode="dark"
          type="button"
          inverted
          onClick={() => addItem(item)}
        >
          Add to cart
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: any) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
