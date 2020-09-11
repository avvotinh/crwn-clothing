import React from "react";
import "./previewCollection.scss";
import CollectionItem from "../CollectionItem/CollectionItem";
import { useHistory, useRouteMatch } from "react-router-dom";

const PreviewCollection = ({ title, items, routeName }: any) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <div className="collection-preview">
      <h1 className="title" onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </h1>
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
