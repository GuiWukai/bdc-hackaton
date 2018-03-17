import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { HomePage, Page1, Page2 } from "./pages";
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
              <Link to="/">Website Title</Link>
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">
                <Link to="/page1">Page 1</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/page2">Page 2</Link>
              </Menu.Item>
              <Menu.Item key="3">Page 3</Menu.Item>
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
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
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
