import React, { Component, Fragment } from 'react';
import { Alert } from 'antd';
import Line from '../components/Line';
import HeroForm from '../components/HeroForm';
import UpdateHeroMutation from '../mutations/UpdateHeroMutation';

import { QueryRenderer, graphql } from 'react-relay';
import environment from '../Environment';
import Skills from '../components/Skills';

const HeroQuery = graphql`
  query HeroQuery($id: ID!) {
    viewer {
      Hero(id: $id) {
        id
        name
        skills {
          edges {
            node {
              id
              name
              description
              date
            }
          }
        }
        date
      }
    }
  }
`;

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: false
    }
  }

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({ alert: true });
      setTimeout(() => {
        this.setState({ alert: false });
      }, 2000);
    }
  }

  render() {
    return (
      <Fragment>
        <QueryRenderer
          environment={environment}
          query={HeroQuery}
          variables={{
            id: this.props.match.params.id
          }}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              let hero = Object.assign({}, props.viewer.Hero);
              return (
                <Fragment>
                  <h1>Hero page</h1>
                  <Line />
                  {this.state.alert ? <Alert style={{ margin: '10px 0' }} message="Data saved successfully" type="success" /> : ''}
                  <HeroForm data={hero} sendbackData={(name, date) => {
                    this.setState({ alert: true });
                    UpdateHeroMutation(this.props.match.params.id, name, date)
                      .then(() => {
                        setTimeout(() => {
                          this.setState({ alert: false });
                        }, 2000);
                      });
                  }} />
                  <Skills heroId={this.props.match.params.id} skills={hero.skills} />
                </Fragment>
              );
            }
            return <div>Ожидание...</div>
          }}
        />
      </Fragment>
    );
  }
}

export default Hero;