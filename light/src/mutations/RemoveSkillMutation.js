import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';

const mutation = graphql`
  mutation RemoveSkillMutation($input: RemoveSkillInput!) {
    removeSkill(input: $input) {
      deletedId
    }
  }
`;

export default (id) => new Promise((resolve, reject) => {
  commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {
          id
        }
      },
      onCompleted: (res, err) => {
        if (err) return reject(err);
        return resolve("Removed");
      },
      onError: err => console.error(err)
    },
  );
});