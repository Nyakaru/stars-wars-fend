import React from "react";
import { Layout, Popover } from "antd";
import { Link } from "react-router-dom";

import { toggleCollapsedSideNav } from "../../store/actions/settings";
import SearchBox from "../../components/searchBox";
import UserInfo from "../../components/userInfo";
import { useAppState, useAppDispatch } from "../../store/";

import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  TAB_SIZE,
} from "../../constants/themeSettings";

const { Header } = Layout;

const Topbar = () => {
  const appState = useAppState();
  const dispatch = useAppDispatch();
  const { width, navCollapsed, navStyle } = appState.settingsReducer;

  return (
    <Header>
      {navStyle === NAV_STYLE_DRAWER ||
      ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) &&
        width < TAB_SIZE) ? (
        <div className="gx-linebar gx-mr-3">
          <i
            className="gx-icon-btn icon icon-menu"
            onClick={() => {
              toggleCollapsedSideNav(!navCollapsed, dispatch);
            }}
          />
        </div>
      ) : null}
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
        {width >= TAB_SIZE ? null : (
          <>
            <li className="gx-user-nav">
              <UserInfo />
            </li>
          </>
        )}
      </ul>
    </Header>
  );
};

export default Topbar;
