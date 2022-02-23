import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import "./App.css";
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrenties,
  News,
  CryptoDetails,
} from "./components";
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrenties">
                <Cryptocurrenties />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          Cryptoverse <br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
        </Space>
      </div>
    </div>
  );
}

export default App;
