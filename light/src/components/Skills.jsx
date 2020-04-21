import React, { Component } from 'react';

import { QueryRenderer, graphql } from 'react-relay';
import environment from '../Environment';

const SkillsQuery = graphql`
  query SkillsQuery ($input: [ID!]!) {
    nodes (ids: $input) {
      id
      ... on Skill {
        id
        name
      }
    }
  }
`;

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <hr/>
        <h1>Skills</h1>
        <QueryRenderer
          environment={environment}
          query={SkillsQuery}
          variables={{
            input: this.props.skills,
          }}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              console.log(props);
              return <div>                
                {props.nodes.map(skill => (
                  <h3>{skill.name}</h3>
                ))}
                <h1 style={{ color: 'firebrick' }}>Теперь надо поработать над UI</h1>
              </div>;
            }
            return <div>Loading</div>;
          }}
        />
      </div>
    );
  }
}

export default Skills;