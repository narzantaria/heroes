import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';

const mutation = graphql`
  mutation RemoveHeroMutation($input: RemoveHeroInput!) {
    removeHero(input: $input) {
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