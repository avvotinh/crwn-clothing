import React from "react";
import "./CollectionsOverview.scss";
import PreviewCollection from "../PreviewCollection/PreviewCollection";
import { useSelector } from "react-redux";
import { selectCollectionsPreview } from "../../redux/shop/shopSelector";

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsPreview);

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...rest }: any) => (
        <PreviewCollection key={id} {...rest} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
