import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Overview from "./OverView";
import CreateProduct from "./CreateProduct";

const { Header, Sider, Content } = Layout;

const AdminAccount = () => {
  const [activeComponent, setActiveComponent] = useState("Overview");

  const renderContent = () => {
    switch (activeComponent) {
      case "Overview":
        return <Overview />;
      case "Create":
        return <CreateProduct />;
      default:
        return <div>Content Not Found</div>;
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          background: "#fff",
          padding: "0 20px",
          textAlign: "center",
          position: "fixed",
          width: "100%",
          zIndex: 1,
        }}
      >
        <span style={{ fontSize: "18px", fontWeight: "bold" }}>
          Admin Dashboard
        </span>
      </Header>
      <Layout style={{ marginTop: 64 }}>
        <Sider
          style={{
            background: "#fff",
            borderRight: "1px solid #f0f0f0",
            height: "calc(100vh - 64px)",
            position: "fixed",
            left: 0,
            top: 64,
            width: 200, 
          }}
          className="site-layout-background"
        >
          <Sidebar setActiveComponent={setActiveComponent} />
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Content
            style={{
              background: "#fff",
              padding: "20px",
              minHeight: "100vh", 
              overflow: "auto",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              scrollbarWidth: "thin",
              scrollbarColor: "hsl(0deg 89.94% 68.82%) white",
            }}
          >
            {renderContent()}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminAccount;
