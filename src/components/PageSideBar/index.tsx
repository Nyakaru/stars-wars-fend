import React from "react";

import CustomScrollbars from "../customScrollBar";
import { PageSideBarProps } from "./interface";

const PageSideBar: React.FC<PageSideBarProps> = (props) => {
  const { pageTitle } = props;
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
        </CustomScrollbars>
      </div>
    </div>
  );
};

export default PageSideBar;
