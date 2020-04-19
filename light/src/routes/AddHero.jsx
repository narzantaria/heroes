import React, { Component } from 'react';
import Line from '../components/Line';
import HeroForm from '../components/HeroForm';
import CreateHeroMutation from '../mutations/CreateHeroMutation';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../Environment';
import Spinner from '../components/Spinner';

const shutruk = 'Shutruk-Nahhunte!!!';

class AddHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qwerty: ''
    }
  }

  render() {
    return (
      <div>
        <h1>Add new Hero</h1>
        <Line />
        <HeroForm parentCallback={(childData) => { this.setState({ qwerty: childData }) }} />
        <button onClick={() => { alert(this.state.qwerty) }}>jhkhgfjhgfjhgfjhg</button>
      </div>
    );
  }
}

export default AddHero;