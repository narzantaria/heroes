import React, { Component } from 'react';
import { Collapse } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import RemoveSkillMutation from '../mutations/RemoveSkillMutation';
import UpdateSkillMutation from '../mutations/UpdateSkillMutation';

import SkillForm from './SkillForm';

const { Panel } = Collapse;

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
    return (
      <div>
        <br />
        <h1>Skills</h1>
        <Collapse style={{ marginBottom: '25px' }}>
          {this.props.skills.edges.map(skill => (
            <Panel header={skill.node.name} key={skill.node.id} extra={genExtra(this.props.heroId, skill.node.id)}>
              <SkillForm data={skill.node} sendbackData={(name, description, date) => {
                UpdateSkillMutation(skill.id, name, description, date)
                  .then(() => {
                    window.location.reload();
                  });
              }} />
            </Panel>
          ))}
        </Collapse>
      </div>
    );
  }
}

export default Skills;