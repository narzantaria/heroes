import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';

const mutation = graphql`
  mutation CreateSkillMutation($input: CreateSkillInput!) {
    createSkill(input: $input) {
      skill {
        id
        name
        description
        date
      }
    }
  }
`;

export default (heroId, name, description, date) => new Promise((resolve, reject) => {
  commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {
          heroId,
          name,
          description,
          date
        }
      },
      // updater: (store) => {
      //   const hero = store.get(heroId);        
      //   const heroSkills = hero.getLinkedRecord('skills');
      //   hero.setValue(name, 'name');
      //   const heroName = hero.getValue('name');
      // },
      onCompleted: (res, err) => {
        if (err) return reject(err);
        return resolve(res.createSkill.skill.id);
      },
      onError: err => console.error(err)
    },
  );
});