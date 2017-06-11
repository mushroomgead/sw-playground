import React, { Component } from 'react';
import firebaseConfig from '../firebase.config';

function RateBlock ({count, country, rate}) {
  return (
    <div key={count} className={`block-content ${ count % 2 || 'bg-grey'}`}>
      <div>{`ประเทศ: ${country}`}</div>
      <div>{`อัตราภาษี: ${rate} %`}</div>
    </div>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      message : []
    }
  }

  componentDidMount() {
    const ref = firebaseConfig().database().ref('/rates');
    ref.on('child_added', rates => {
      let message = {
        country: rates.val().code,
        rate: rates.val().periods[0].rates.standard,
      };
      this.setState({
        message: [message].concat(this.state.message)
      });
    })
  }

  rendercontent() {
    let rate = this.state.message;
    return rate.map((row, i) => (
      <RateBlock key={i} count={i} country={row.country} rate={row.rate} />
    ))
  }
  render() {
    return (
      <div>
        {this.rendercontent()}
      </div>
    );
  }
}

export default App;
