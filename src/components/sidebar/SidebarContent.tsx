import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import CustomScrollbars from "../../components/customScrollBar";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import {
  THEME_TYPE_LITE,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
} from "../../constants/themeSettings";
import { NaVitems } from "./NavItems";
import { useAppState } from "../../store/";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const SidebarContent = () => {
  const appState = useAppState();
  let { navStyle, themeType, pathname } = appState.settingsReducer;

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];
  const getNavStyleSubMenuClass = (navStyle: string) => {
    if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
      return "gx-no-header-submenu-popup";
    }
    return "";
  };
  return (
    <>
      <SidebarLogo />
      <div className="gx-sidebar-content">
        <div className="gx-sidebar-notifications">
          <UserProfile />
          <AppsNavigation />
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? "light" : "dark"}
            mode="inline"
          >
            <MenuItemGroup key="main" className="gx-menu-group" title="Menu">
              {NaVitems.map((navitem) => {
                if (navitem.subNavs) {
                  return (
                    <SubMenu
                      key="registration"
                      popupClassName={getNavStyleSubMenuClass(navStyle)}
                      title={
                        <span>
                          {" "}
                          <i className={`icon ${navitem.icon}`} />
                          <span>{navitem.navName}</span>
                        </span>
                      }
                    >
                      {navitem.subNavs.map((subNav) => {
                        return (
                          <Menu.Item key={subNav.linkTo}>
                            <Link to={subNav.linkTo}>
                              <i className={`icon ${subNav.icon}`} />
                              <span>{subNav.navName}</span>
                            </Link>
                          </Menu.Item>
                        );
                      })}
                    </SubMenu>
                  );
                } else {
                  return (
                    <Menu.Item key={navitem.linkTo}>
                      <Link to={navitem.linkTo}>
                        <i className={`icon ${navitem.icon}`} />
                        <span>{navitem.navName}</span>
                      </Link>
                    </Menu.Item>
                  );
                }
              })}
            </MenuItemGroup>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

export default SidebarContent;
