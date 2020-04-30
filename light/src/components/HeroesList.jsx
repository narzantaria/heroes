import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import HeroTpl from './HeroTpl';
import Spinner from './Spinner';

import { createPaginationContainer, graphql } from 'react-relay';

class HeroesList extends Component {
  constructor(props) {
    super(props);
    this.state = { spin: false };
  }
  _loadMore() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }
    this.props.relay.loadMore(
      5,
      error => {
        console.log(error);
      },
    );
  }
  render() {
    return (
      <div style={{ padding: '10px 0' }}>
        {this.state.spin ? <Spinner /> : ''}
        {this.props.viewer.Heroes.edges.map(edge => (
          <HeroTpl hero={edge.node} key={edge.node.id}
            callUp={arg => {
              this.setState({ spin: arg });
            }}
          />
        ))}
        <Button onClick={() => this._loadMore()}>
          <RightOutlined />
        </Button>
        <br/>
      </div>
    );
  }
}
export default createPaginationContainer(
  HeroesList,
  {
    viewer: graphql`
      fragment HeroesList_viewer on Viewer
      @argumentDefinitions(
        count: {type: "Int", defaultValue: 5}
        cursor: {type: "String"}
      ) {
        Heroes(
          first: $count
          after: $cursor
        ) @connection(key: "HeroesList_Heroes") {
          edges {
            node {
              id
              ...HeroTpl_hero
            }
          },
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `,
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.viewer && props.viewer.Heroes
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      }
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count,
        cursor
      };
    },
    query: graphql`
      query HeroesListPaginationQuery(
        $count: Int!,
        $cursor: String,
      ) {
        viewer {
          ...HeroesList_viewer @arguments(count: $count, cursor: $cursor)
        }
      }
    `,
  }
);