import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';

const mutation = graphql`
  mutation CreateHeroMutation($input: CreateHeroInput!) {
    createHero(input: $input) {
      hero{
        id
        name
        skills
        date
      }
    }
  }
`;

export default (name, skills, date) => new Promise((resolve, reject) => {
  commitMutation(
    environment,
    {
      mutation,
      variables: {
        input: {
          name,
          skills,
          date
        }
      },
      onCompleted: (res, err) => {
        if (err) return reject(err);
        return resolve(res.createHero.hero.id);
      },
      onError: err => console.error(err)
    },
  );
});