import React, { Component } from 'react';
import Line from '../components/Line';
import HeroForm from '../components/HeroForm';
import CreateHeroMutation from '../mutations/CreateHeroMutation';

class AddHero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Add new Hero</h1>
        <Line />
        <HeroForm sendbackData={(name, skills, date) => {
          CreateHeroMutation(name, skills, date)
            .then(arg => console.log(arg));
        }} />
      </div>
    );
  }
}

export default AddHero;