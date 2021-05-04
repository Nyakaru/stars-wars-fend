import React from "react";
import { Layout, Popover } from "antd";
import { Link } from "react-router-dom";

import SearchBox from "../../components/searchBox";
import UserInfo from "../../components/userInfo";

const { Header } = Layout;

const Topbar = () => {
  return (
    <Header>
      <Link to="/" className="gx-d-block gx-d-lg-none gx-pointer">
        <img alt="" src="" />
      </Link>

      <SearchBox
        styleName="gx-d-none gx-d-lg-block gx-lt-icon-search-bar-lg"
        placeholder="Search in app..."
        onChange={() => {}}
      />
      <ul className="gx-header-notifications gx-ml-auto">
        <li className="gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none">
          <Popover
            overlayClassName="gx-popover-horizantal"
            placement="bottomRight"
            content={
              <SearchBox
                styleName="gx-popover-search-bar"
                placeholder="Search in app..."
                onChange={() => {}}
              />
            }
            trigger="click"
          >
            <span className="gx-pointer gx-d-block">
              <i className="icon icon-search-new" />
            </span>
          </Popover>
        </li>
        <li className="gx-user-nav">
          <UserInfo />
        </li>
      </ul>
    </Header>
  );
};

export default Topbar;
