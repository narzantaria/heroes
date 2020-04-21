import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';

const mutation = graphql`
  mutation UpdateHeroSkillsMutation($input: UpdateHeroSkillsInput!) {
    updateSkills(input: $input) {
      updatedId
    }
  }
`;

export default (id, operation, skill) => new Promise((resolve, reject) => {
  commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {
          id,
          operation,
          skill
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