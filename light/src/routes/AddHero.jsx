import React, { Component } from 'react';
import Line from '../components/Line';
import HeroForm from '../components/HeroForm';
import CreateHeroMutation from '../mutations/CreateHeroMutation';

class AddHero extends Component {
  render() {
    return (
      <div>
        <h1>Add new Hero</h1>
        <Line />
        <HeroForm sendbackData={(name, date) => {
          CreateHeroMutation(name, date)
            .then(arg => {
              console.log(arg);
              this.props.history.push("/heroes/" + arg, { params: 'Shutruk-Nahhunte!!!' });
            });
        }} />
      </div>
    );
  }
}

export default AddHero;