import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';

const mutation = graphql`
  mutation UpdateSkillMutation($input: UpdateSkillInput!) {
    updateSkill(input: $input) {
      updatedId
    }
  }
`;

export default (id, name, description, date) => new Promise((resolve, reject) => {
  commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {
          id,
          name,
          description,
          date
        }
      },
      onCompleted: (res, err) => {
        if (err) return reject(err);
        return resolve("Updated");
      },
      onError: err => console.error(err)
    },
  );
});