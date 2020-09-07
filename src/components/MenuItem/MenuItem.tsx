import React from "react";
import "./menuItem.scss";

export const MenuItem = ({ title, imageUrl, size }: { title: any; imageUrl: any; size: any }) => (
  <div className={`${size} menu-item`}>
    <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>

    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
