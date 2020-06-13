import React, { Fragment, useEffect, useState } from 'react';
import { Alert, Collapse } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import RemoveSkillMutation from '../mutations/RemoveSkillMutation';
import UpdateSkillMutation from '../mutations/UpdateSkillMutation';
import SkillForm from './SkillForm';
import moment from 'moment';

const dateFormat = 'DD/MM/YYYY';
const { Panel } = Collapse;

function Skills(props) {
  const [skills, setSkills] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [alert, setAlert] = useState(false);

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
      {alert ? <Alert style={{ margin: '10px 0' }} message="Data saved successfully" type="success" /> : ''}
      <br />
      <h1>Skills</h1>
      <Collapse accordion style={{ marginBottom: '25px' }}>
        {skills.length && skills.map((skill, index) => (
          <Panel
            header={skill.node.name}
            key={skill.node.name}
            extra={handleRemove(props.heroId, skill.node.id, index)}
          >
            <SkillForm data={skill.node} sendbackData={(name, description, date) => {              
              let skillsProxy = Object.assign([], skills);
              skillsProxy[index] = Object.assign({}, {
                node: {
                  id: skill.node.id,
                  name: name,
                  description: description,
                  date: date
                }
              });
              setSkills(skillsProxy);
              setAlert(true);
              UpdateSkillMutation(skill.node.id, name, description, date)
                .then(() => {
                  setTimeout(() => {
                    setAlert(false);
                  }, 2000);
                });
            }} />
          </Panel>
        ))}
      </Collapse>
    </Fragment>
  )
}

export default Skills;

