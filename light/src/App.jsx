import React from 'react';
import logo from './img/bagua.png';
import { Layout, Menu, Row, Col } from 'antd';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Main from './routes/Main';
import Heroes from './routes/Heroes';
import Hero from './routes/Hero';
import AddHero from './routes/AddHero';

const { SubMenu } = Menu;

function App() {
  return (
    <BrowserRouter>
      <Layout.Header
        id="top"
        style={{ backgroundColor: 'sienna' }}
      >
        <Row>
          <Col span={18} offset={3}>
            <Link to="/" onClick={() => {
              let selected = document.querySelectorAll('.ant-menu-item');
              for (let i = 0; i < selected.length; i++) {
                selected[i].classList.remove('ant-menu-item-selected');
              }
            }} >
              <img id="logo" src={logo} alt="" />
            </Link>
            <Menu
              mode="horizontal"
              style={{ lineHeight: '64px', float: 'right' }}
            >
              <SubMenu
                key="sub1"
                title="Heroes"
              >
                <Menu.Item key="1"><Link to="/heroes">Heroes List</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/addhero">Add Hero</Link></Menu.Item>  
              </SubMenu>
            </Menu>
          </Col>
        </Row>
      </Layout.Header>
      <Switch>
        <div className="wrapper">
          <Row>
            <Col span={18} offset={3}>
              <Route path="/" exact component={Main} />
              <Route path="/heroes" exact component={Heroes} />
              <Route path="/heroes/:id" exact component={Hero} />
              <Route path="/addhero" exact component={AddHero} />
            </Col>
          </Row>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
