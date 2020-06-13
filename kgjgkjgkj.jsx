import React, { Fragment, useEffect, useState } from 'react';
import { Collapse } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import RemoveSkillMutation from '../mutations/RemoveSkillMutation';
import UpdateSkillMutation from '../mutations/UpdateSkillMutation';

import SkillForm from './SkillForm';

const { Panel } = Collapse;

function Skills(props) {
  const [skills, setSkills] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const handleRemove = (hero, skill, index) => (
    <CloseCircleOutlined
      style={{ color: '#92000A' }}
      onClick={e => {
        e.stopPropagation();
        RemoveSkillMutation(hero, skill).then(() => {
          e.stopPropagation();
          let skillsProxy = Object.assign([], skills);
          skillsProxy.splice(index, 1);
          setSkills(skillsProxy);
          RemoveSkillMutation(hero, skill);
        });
      }}
    />
  );

  useEffect(() => {
    if (props.skills && !loaded) {
      setSkills(props.skills.edges);
      setLoaded(true);
    }
  });

  return (
    <Fragment>
      <br />
      <h1>Skills</h1>
      <Collapse style={{ marginBottom: '25px' }}>
        {skills.length && skills.map((skill, index) => (
          <Fragment>
            <Panel header={skill.node.name} key={skill.node.id} extra={
              handleRemove(props.heroId, skill.node.id, index)
            }>
              <SkillForm data={skill.node} sendbackData={(name, description, date) => {
                UpdateSkillMutation(skill.id, name, description, date)
                  .then(() => {
                    window.location.reload();
                  });
                console.log(skills);
              }} />
            </Panel>
          </Fragment>
        ))}
      </Collapse>
    </Fragment>
  )
}

export default Skills;

