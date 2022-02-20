import { Fragment, useState } from "react";
import "antd/dist/antd.min.css";
import "./Dashboard.css";
import { Layout, Menu, Breadcrumb, Dropdown } from "antd";
import {
  DesktopOutlined,
  HomeOutlined,
  LogoutOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import logo from "../Assets/logo.svg";
import { BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import DashboardRouting from "../Routes/DashboardRouting";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const Dashboard = () => {
  const [collapsed, setcollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setcollapsed(collapsed);
  };
  const userMenu = (
    <Menu>
      <Menu.Item key="1">Mon Profil</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">Déconnexion</Menu.Item>
    </Menu>
  );
  return (
    <Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <Router>
          <Switch>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "2em",
                }}
              >
                {!collapsed ? (
                  <img
                    src={logo}
                    alt=""
                    style={{
                      width: "115px",
                      height: "115px",
                    }}
                  />
                ) : (
                  <div style={{ height: "115px" }}></div>
                )}
              </div>

              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item key="1" icon={<HomeOutlined />}>
                  <NavLink exact to="/accueil">
                    Accueil
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                  <NavLink exact to="/monCompte">
                    Mes Statistique
                  </NavLink>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  icon={<UserOutlined />}
                  title="Mes Statistiques"
                >
                  <Menu.Item key="3">ajouter</Menu.Item>
                  <Menu.Item key="4">modifier</Menu.Item>
                  <Menu.Item key="5">supprimer</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Mes Clients">
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<LogoutOutlined />}>
                  Déconnexion
                </Menu.Item>
              </Menu>
            </Sider>
          </Switch>
        </Router>
        <Layout className="site-layout">
          <Header className="header ">
            <Dropdown.Button
              style={{
                float: "right",
              }}
              className="dropdown-btn"
              overlay={userMenu}
              icon={
                <UserOutlined
                  style={{
                    fontSize: "17px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "70%",
                  }}
                />
              }
            ></Dropdown.Button>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 540 }}
            >
              <DashboardRouting />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Hi Coach ©2022</Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default Dashboard;
