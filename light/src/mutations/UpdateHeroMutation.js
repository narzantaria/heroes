import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';

const mutation = graphql`
  mutation UpdateHeroMutation($input: UpdateHeroInput!) {
    updateHero(input: $input) {
      updatedId
    }
  }
`;

export default (id, name, skills, date) => new Promise((resolve, reject) => {
  commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {
          id,
          name,
          skills,
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