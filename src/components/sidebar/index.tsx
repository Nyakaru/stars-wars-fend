import React from "react";
import { Layout } from "antd";

import SidebarContent from "./SidebarContent";

import "./sidebar.scss";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider className="gx-app-sidebar" collapsible>
      <SidebarContent />
    </Sider>
  );
};
export default Sidebar;
