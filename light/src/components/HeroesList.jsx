import React, { Fragment } from 'react';
import HeroTpl from './HeroTpl';

import { createFragmentContainer, graphql } from 'react-relay';

function HeroesList(props) {
  return (
    <Fragment>
      {props.viewer.Heroes.edges.map(({ node }) => (
        <HeroTpl key={node.__id} hero={node} />
      ))}
    </Fragment>
  );
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