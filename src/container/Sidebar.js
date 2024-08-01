import React from "react";
import { Layout, Menu } from "antd";
import {
  PlusOutlined,
  DashboardOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const siderStyle = {
  background: "#fff",
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  left: 0,
  transition: "all 0.3s ease",
};

const menuStyle = {
  height: "100%",
  borderRight: 0,
};

function Sidebar({ setActiveComponent }) {
  const handleMenuClick = (key) => {
    setActiveComponent(key);
    console.log("Clicked on menu item:", key);
  };

  return (
    <Sider style={siderStyle} className="site-layout-background">
      <Menu mode="inline" defaultSelectedKeys={["Overview"]} style={menuStyle}>
        <Menu.Item
          key="Overview"
          icon={<DashboardOutlined />}
          onClick={() => handleMenuClick("Overview")}
        >
          Overview
        </Menu.Item>
        <Menu.Item
          key="Create"
          icon={<PlusOutlined />}
          onClick={() => handleMenuClick("Create")}
        >
          Create Product
        </Menu.Item>
        <Menu.Item
          key="Update"
          icon={<EditOutlined />}
          onClick={() => handleMenuClick("Update")}
        >
          Update Product
        </Menu.Item>
        <Menu.Item
          key="Delete"
          icon={<DeleteOutlined />}
          onClick={() => handleMenuClick("Delete")}
        >
          Delete Product
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
