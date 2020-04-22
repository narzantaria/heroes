import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';

const mutation = graphql`
  mutation RemoveSkillsMutation($input: RemoveSkillsMutationInput!) {
    removeSkills(input: $input) {
      deletedIDs
    }
  }
`;

export default (ids) => new Promise((resolve, reject) => {
  commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {
          ids
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