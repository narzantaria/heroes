import React, { Component } from 'react';
import { Collapse } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
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
    style={{ color: '#92000A' }}
    onClick={e => {
      e.stopPropagation();
      RemoveSkillMutation(hero, skill).then(() => {
        window.location.reload();
      });
    }}
  />
);

class Skills extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const skills = this.props.skills.edges.map(skill => skill.node.id);
    return (
      <div>
        <br />
        <h1>Skills</h1>
        <QueryRenderer
          environment={environment}
          query={SkillsQuery}
          variables={{
            input: skills,
          }}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              return <Collapse style={{ marginBottom: '25px' }}>
                {props.nodes.map(skill => (
                  <Panel header={skill.name} key={skill.id} extra={genExtra(this.props.heroId, skill.id)}>
                    <SkillForm data={skill} sendbackData={(name, description, date) => {
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