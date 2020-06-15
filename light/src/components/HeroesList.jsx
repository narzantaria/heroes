import React, { Component } from 'react';
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
  _loadMore(arg) {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }
    this.props.relay.loadMore(
      arg,
      error => {
        console.log(error);
      },
    );
  }
  render() {
    const edges = this.props.viewer.Heroes.edges.filter(edge => edge.node);
    return (
      <div style={{ padding: '10px 0' }}>
        {this.state.spin ? <Spinner /> : ''}
        {edges.map(edge => (
          <HeroTpl hero={edge.node} key={edge.node.id}
            callUp={_ => {
              this._loadMore(1);
            }}
          />
        ))}
        <Button onClick={() => this._loadMore(5)}>
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