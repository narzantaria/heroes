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

export default (name, skills, date) => {
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
      onCompleted: (response, errors) => {
        console.log('Response received from server.');        
      },
      onError: err => console.error(err),
    },
  );
};