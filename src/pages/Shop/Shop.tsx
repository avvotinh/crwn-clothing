import React from "react";
import { SHOP_DATA } from "./shop.data";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";

class ShopPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map((collection: any) => (
          <PreviewCollection key={collection.id} title={collection.title} items={collection.items} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
