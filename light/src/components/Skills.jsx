import React, { Component } from 'react';
import { Collapse } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import UpdateHeroSkillsMutation from '../mutations/UpdateHeroSkillsMutation';
import RemoveSkillMutation from '../mutations/RemoveSkillMutation';
import UpdateSkillMutation from '../mutations/UpdateSkillMutation';

import { QueryRenderer, graphql } from 'react-relay';
import environment from '../Environment';
import SkillForm from './SkillForm';

const { Panel } = Collapse;

const SkillsQuery = graphql`
  query SkillsQuery ($input: [ID!]!) {
    nodes (ids: $input) {
      id
      ... on Skill {
        id
        name
        description
        date
      }
    }
  }
`;

const genExtra = (hero, skill) => (
  <CloseCircleOutlined
    onClick={event => {
      event.stopPropagation();
      UpdateHeroSkillsMutation(hero, "1", skill)
        .then(() => {
          RemoveSkillMutation(skill).then(() => {
            window.location.reload();
          });
        });
    }}
  />
);

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <br />
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
              // console.log(props);
              return <Collapse style={{ marginBottom: '25px' }}>
                {props.nodes.map(skill => (
                  <Panel header={skill.name} key={skill.id} extra={genExtra(this.props.heroId, skill.id)}>
                    <SkillForm data={skill} sendbackData={(name, description, date) => {
                      // console.log(name);
                      UpdateSkillMutation(skill.id, name, description, date)
                        .then(() => {
                          window.location.reload();
                        });
                    }} />
                  </Panel>
                ))}
              </Collapse>;
            }
            return <div>Loading</div>;
          }}
        />
      </div>
    );
  }
}

export default Skills;