import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "../MenuItem/MenuItem";
import "./directory.scss";
import { selectDirectorySections } from "../../redux/directory/directorySelector";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <div className="directory-menu">
      {sections.map((section: any) => {
        const { id, ...rest } = section;

        return <MenuItem key={id} {...rest} />;
      })}
    </div>
  );
};

export default Directory;
