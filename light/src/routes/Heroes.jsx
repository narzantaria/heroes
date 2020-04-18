import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Button, Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Line from '../components/Line';

class Heroes extends Component {

  render() {
    return (
      <Fragment>
        <h1>Heroes page</h1>
        <Line />
        <Button type="primary">
          <PlusOutlined /> <Link to="/addhero">Add Hero</Link>
        </Button>        
      </Fragment>
    );
  }
}

export default Heroes;