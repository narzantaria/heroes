import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { createFragmentContainer, graphql } from 'react-relay';
import { DeleteOutlined } from '@ant-design/icons';
// import Spinner from './Spinner';

class HeroTpl extends Component {
  constructor(props) {
    super(props);
    // this.state={
    //   spin: false
    // };
  }

  render() {
    return (
      <Row className="line">
        <Col span={12}>
          <Link to={`/heroes/${this.props.hero.id}`}>
            <h3>{this.props.hero.name}</h3>
          </Link>
        </Col>
        <Col span={6}>{this.props.hero.date}</Col>
        <Col span={6}>
          <DeleteOutlined className="delete" />
        </Col>
      </Row>
    );
  }
}

export default createFragmentContainer(
  HeroTpl, {
  hero: graphql`
      fragment HeroTpl_hero on Hero {
        id
        name
        skills
        date
      }
    `
}
);