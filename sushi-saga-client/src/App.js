import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      budget: 100000000,
      allSushi: [],
      currSushi: [],
      eatenSushi: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({
        allSushi: sushis
      })
    })
  }

  updateCurrSushi = () => {
    let all = [...this.state.allSushi]
    this.setState({
      currSushi: all.splice(0,4),
      allSushi: all
    })
  }

  eatSushi = (pickedSushi) => {
    if (!this.state.eatenSushi.includes(pickedSushi) &&this.state.budget > pickedSushi.price) {
      this.setState({
        budget: this.state.budget - pickedSushi.price,
        eatenSushi: [...this.state.eatenSushi, pickedSushi]
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          eatSushi={this.eatSushi}
          eatenSushi={this.state.eatenSushi}
          currSushi={this.state.currSushi} updateCurrSushi={this.updateCurrSushi} 
        />
        <Table 
          eatenSushi={this.state.eatenSushi} 
          budget={this.state.budget}
        />
      </div>
    );
  }
}

export default App;