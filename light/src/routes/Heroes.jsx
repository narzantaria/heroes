import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Line from '../components/Line';

import { QueryRenderer, graphql } from 'react-relay';
import environment from '../Environment';
import HeroesList from '../components/HeroesList';

const HeroesQuery = graphql`
  query HeroesQuery {
    viewer {
      ...HeroesList_viewer
    }
  }
`;

class Heroes extends Component {
  render() {
    return (
      <Fragment>
        <h1>Heroes page</h1>
        <Line />
        <Button type="primary">
          <PlusOutlined /> <Link to="/addhero">Add Hero</Link>
        </Button>
        <QueryRenderer
          environment={environment}
          query={HeroesQuery}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              return <HeroesList viewer={props.viewer} />;
            }
            return <div>Загрузка данных...</div>
          }}
        />      
      </Fragment>
    );
  }
}

export default Heroes;