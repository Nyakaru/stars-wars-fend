import React, { useState } from "react";

import CustomScrollbars from "../customScrollBar";
import { PageSideBarProps } from "./interface";

const PageSideBar: React.FC<PageSideBarProps> = (props) => {
  const { pageTitle, onFilterOptionSelect } = props;
  const [selectedSectionId, setSelectedSectionId] = useState("All");
  const filterOptions = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Male",
    },
    {
      id: 3,
      name: "Female",
    },
    {
      id: 4,
      name: "Hermaphrodite",
    },
    {
      id: 5,
      name: "None",
    },
    {
      id: 6,
      name: "N/A",
    },
  ];

  return (
    <div className="gx-module-side">
      <div className="gx-module-side-header">
        <div className="gx-module-logo">{pageTitle}</div>
      </div>

      <div className="gx-module-side-content">
        <CustomScrollbars className="gx-module-side-scroll">
          <div className="gx-module-add-task"></div>
          <div className="gx-module-side-nav">
            <ul className="gx-module-nav"></ul>
          </div>
          <div className="gx-module-side-nav">
            <ul className="gx-module-nav">
              {filterOptions.map((option) => (
                <li key={option.id} className="gx-nav-item">
                  <span
                    className={`gx-link ${
                      option.name === selectedSectionId ? "active" : ""
                    }`}
                    onClick={(event) => {
                      setSelectedSectionId(option?.name);
                      onFilterOptionSelect(option?.name);
                    }}
                  >
                    <span>{option.name}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </CustomScrollbars>
      </div>
    </div>
  );
};

export default PageSideBar;
