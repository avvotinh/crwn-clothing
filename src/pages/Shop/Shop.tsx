import React from "react";
import { SHOP_DATA } from "../../redux/shop/shop.data";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";
import { useSelector } from "react-redux";
import { selectCollections } from "../../redux/shop/shopSelector";

const ShopPage = () => {
  const collections = useSelector(selectCollections);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...rest }: any) => (
        <PreviewCollection key={id} {...rest} />
      ))}
    </div>
  );
};

export default ShopPage;
