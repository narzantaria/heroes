import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { createFragmentContainer, graphql } from 'react-relay';
import { DeleteOutlined } from '@ant-design/icons';

import RemoveHeroMutation from '../mutations/RemoveHeroMutation';

class HeroTpl extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Row className="line">
          <Col span={12}>
            <Link to={`/heroes/${this.props.hero.id}`}>
              <h3>{this.props.hero.name}</h3>
            </Link>
          </Col>
          <Col span={6}>{this.props.hero.date}</Col>
          <Col span={6}>
            <DeleteOutlined
              className="delete"
              onClick={() => {
                this.props.callUp(true);
                RemoveHeroMutation(this.props.hero.id)
                  .then(() => {
                    this.props.callUp(false);
                    window.location.reload();
                  });
              }}
            />
          </Col>
        </Row>
      </Fragment>
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