import React from "react";
import { useRouteMatch } from "react-router-dom";
import "./Collections.scss";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelector";
import CollectionItem from "../../components/CollectionItem/CollectionItem";

const CategoryPage = () => {
  const match = useRouteMatch();
  const collection = useSelector(selectCollection((match.params as any).categoryId));

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item: any) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
