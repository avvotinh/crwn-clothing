import React from "react";
import "./previewCollection.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

interface IPreviewCollectionProps {
  key: number;
  title: string;
  items: any[];
}

class PreviewCollection extends React.Component<
  IPreviewCollectionProps
> {
  constructor(props: IPreviewCollectionProps) {
    super(props);
  }

  render() {
    return (
      <div className="collection-preview">
        <h1 className="title">{this.props.title.toUpperCase()}</h1>
        <div className="preview">
          {this.props.items
            .filter((item, index) => index < 4)
            .map((item) => (
              <CollectionItem
                key={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default PreviewCollection;
