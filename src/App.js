import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search : "",
      data : [
        {
          title : "grey goose",
          author : "dooylan"
        },
        {
          title : "rode goose",
          author : "dood"
        },
        {
          title : "red goose",
          author : "gagan"
        },
        {
          title : "blue goose",
          author : "gaga"
        },
        {
          title : "green goose",
          author : "anmol"
        },
        {
          title : "black goose",
          author : "mantek"
        }
      ]
    }
  }

  searchParam(searchedValue) {
    console.log(searchedValue);
    this.setState({ search : searchedValue });
  }

  render() {
    const { search, data } = this.state;
    return (
      <div className="App container">
        <FormGroup controlId="formBasicText">
          <ControlLabel>SEARCH</ControlLabel>
          <FormControl type="text" onChange={ (event) => this.searchParam(event.target.value) } placeholder="Enter your search here..." />
        </FormGroup>
        <hr />
        <h3 style={{ textAlign: 'left' }}>You searched for : {search} </h3>

        <div>

        </div>
      </div>
    );
  }
}

export default App;
