import React from "react";
import { Layout, Popover } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Topbar = () => {
  return (
    <Header>
      <Link to="/" className="gx-d-block gx-d-lg-none gx-pointer">
        <img alt="" src="" />
      </Link>
      <ul className="gx-header-notifications gx-ml-auto">
        <li className="gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none">
          <Popover
            overlayClassName="gx-popover-horizantal"
            placement="bottomRight"
            trigger="click"
          >
            <span className="gx-pointer gx-d-block">
              <i className="icon icon-search-new" />
            </span>
          </Popover>
        </li>
      </ul>
    </Header>
  );
};

export default Topbar;
