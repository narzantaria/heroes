import React, { Component } from 'react';
import HeroTpl from './HeroTpl';
import Spinner from './Spinner';

import { createFragmentContainer, graphql } from 'react-relay';

class HeroesList extends Component {
  constructor(props) {
    super(props);
    this.state = { spin: false };
  }

  render() {
    return (
      <div style={{ padding: '10px 0' }}>
        {this.state.spin ? <Spinner /> : ''}
        {this.props.viewer.Heroes.edges.map(({ node }) => (
          <HeroTpl key={node.__id} hero={node} callUp={arg => {
            this.setState({ spin: arg });
          }} />
        ))}
      </div>
    );
  }
}

export default createFragmentContainer(
  HeroesList, {
  viewer: graphql`
      fragment HeroesList_viewer on Viewer {
        Heroes(first: 10)
        @connection(key: "HeroesList_Heroes", filters: []) {
          edges {
            node {
              ...HeroTpl_hero
            }
          }
        }
      }
    `
}
);