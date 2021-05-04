import React from "react";
import { Layout } from "antd";
import { useRouteMatch } from "react-router-dom";

//local imports
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topBar";
import App from "../../routes";

const { Content } = Layout;

const MainApp = () => {
  const routMatch = useRouteMatch();
  return (
    <Layout className="gx-app-layout">
      <Sidebar />
      <Layout>
        <Topbar />
        <Content className="gx-layout-content">
          <App routMatch={routMatch} />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainApp;
