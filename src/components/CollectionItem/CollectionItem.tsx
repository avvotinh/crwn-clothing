import React from "react";
import "./collectionItem.scss";

interface ICollectionItemProps {
  name: string;
  price: number;
  imageUrl: string;
}

class CollectionItem extends React.Component<ICollectionItemProps> {
  constructor(props: ICollectionItemProps) {
    super(props);
  }

  render() {
    const { name, price, imageUrl } = this.props;

    return (
      <div className="collection-item">
        <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
      </div>
    );
  }
}

export default CollectionItem;
