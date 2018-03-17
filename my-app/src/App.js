import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { HomePage, Data, Profile } from "./pages";
import { Layout, Menu, Breadcrumb } from "antd";
import "./App.css";
const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App Layout">
        <Layout className="layout">
          <Header>
            <div className="logo">
              <Link to="/">Biogeniq</Link>
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">
                <Link to="/page1">Data</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/page2">Profile</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/data" component={Data} />
                <Route path="/profile" component={Profile} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Health ©2018 Created by Hacker Gang
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
