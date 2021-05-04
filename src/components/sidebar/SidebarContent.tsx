import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import CustomScrollbars from "../../components/customScrollBar";
import SidebarLogo from "./SidebarLogo";
import UserProfile from "./UserProfile";
import AppsNavigation from "./AppsNavigation";
import { NaVitems } from "./NavItems";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const SidebarContent = () => {
  return (
    <>
      <SidebarLogo />
      <div className="gx-sidebar-content">
        <div className="gx-sidebar-notifications">
          <UserProfile />
          <AppsNavigation />
        </div>
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu mode="inline">
            <MenuItemGroup key="main" className="gx-menu-group" title="Menu">
              {NaVitems.map((navitem) => {
                if (navitem.subNavs) {
                  return (
                    <SubMenu
                      key="registration"
                      title={
                        <span>
                          {" "}
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
