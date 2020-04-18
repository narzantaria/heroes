import React, { Component } from 'react';
import Line from '../components/Line';
import HeroForm from '../components/HeroForm';
import CreateHeroMutation from '../mutations/CreateHeroMutation';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../Environment';

const shutruk = 'Shutruk-Nahhunte!!!';

class AddHero extends Component {
  render() {
    return (
      <div>
        <h1>Add new Hero</h1>
        <Line />
        <HeroForm clicker={() => {
          alert(shutruk);
        }} />
      </div>
    );
  }
}

export default AddHero;