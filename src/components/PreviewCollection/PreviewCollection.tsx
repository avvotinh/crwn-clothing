import React from "react";
import "./previewCollection.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

const PreviewCollection = ({ title, items }: any) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item: any, index: any) => index < 4)
          .map((item: any) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
