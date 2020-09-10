import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import "./menuItem.scss";

interface ISectionProps {
  key: number;
  title: string;
  imageUrl: string;
  size: string;
  linkUrl: string;
}

class MenuItem extends React.Component<ISectionProps & RouteComponentProps> {
  constructor(props: ISectionProps & RouteComponentProps) {
    super(props);
  }

  render() {
    return (
      <div
        className={`${this.props.size} menu-item`}
        onClick={() => this.props.history.push(this.props.linkUrl)}
      >
        <div
          className="background-image"
          style={{ backgroundImage: `url(${this.props.imageUrl})` }}
        />
        <div className="content">
          <h1 className="title">{this.props.title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    );
  }
}

export default withRouter(MenuItem);
