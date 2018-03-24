import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import './App.css';

let initialData = [
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




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search : "",
      data : [],
      error : []
    }
    this.searchParam = this.searchParam.bind(this);
  }

  componentWillMount() {
    this.setState({
      data: initialData,
      error: []
    })
  }

  searchParam(event) {
    let searchedValue = event.target.value;
    let filtered = []
    let errorVal = []
    console.log(searchedValue);
    for(var i = 0;i < initialData.length;i++) {
      console.log(initialData[i].title.match(searchedValue) || initialData[i].author.match(searchedValue));
      if(initialData[i].title.match(searchedValue) || initialData[i].author.match(searchedValue)) {
        filtered.push(initialData[i]);
      }
    }
    if(filtered.length === 0) {
      let error =
        {
          title : "Unable to search for : " + searchedValue,
          author : ""
        }
        errorVal.push(error);
    }

    this.setState({ search : searchedValue, data : filtered, error : errorVal});
  }

  render() {
    const { search, data, error } = this.state;
    return (
      <div className="App container">
        <FormGroup controlId="formBasicText">
          <ControlLabel>SEARCH</ControlLabel>
          <FormControl type="text" onChange={this.searchParam} placeholder="Enter your search here..." />
        </FormGroup>
        <hr />
        <h3 style={{ textAlign: 'left' }}>You searched for <b>{search}</b> - <b>{data.length}</b> results founds</h3>
        <div>
          {
            data.map((each, index) => (
              <div className="jumbotron" key={index}>
                  <h3 style={{ fontWeight:'700', textTransform:'uppercase' }}>{each.title}</h3>
                  <h4>By {each.author}</h4>
              </div>
            ))
          }
        </div>
        <div>
          {
            error.map((each, index) => (
              <div className="jumbotron">
                  <h2>No results found for : {search}</h2>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
