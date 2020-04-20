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

export default (name, description, date) => new Promise((resolve, reject) => {
  commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {
          name,
          description,
          date
        }
      },
      onCompleted: (res, err) => {
        if (err) return reject(err);
        return resolve(res.createSkill.skill.id);
      },
      onError: err => console.error(err)
    },
  );
});