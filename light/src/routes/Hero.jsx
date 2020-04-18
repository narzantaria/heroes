import React, { Component, Fragment } from 'react';
import Line from '../components/Line';
import HeroForm from '../components/HeroForm';

const shutruk = 'Shutruk-Nahhunte!!!';

class Hero extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hero page</h1>
        <Line />
        <HeroForm clicker={() => {
          alert(shutruk);
        }} />
      </Fragment>
    );
  }
}

export default Hero;