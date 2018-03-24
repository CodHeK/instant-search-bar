import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import axios from 'axios'
import './App.css';

let initialData = []

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
    axios.get('https://jsonplaceholder.typicode.com/posts/').then(({ data }) => {
      initialData.push(data);
      this.setState({
        data: data,
        error: []
      })
    })
    console.log(initialData);
  }

  searchParam(event) {
    let searchedValue = event.target.value;
    let filtered = []
    let errorVal = []
    console.log(searchedValue);
    console.log(initialData[0].length);
    console.log(initialData[0][0].title + " " + initialData[0][0].userId);
    for(var i = 0;i < initialData[0].length;i++) {
      var Ids = initialData[0][i].userId;
      var titles = initialData[0][i].title;
      if(String(Ids).match(searchedValue) || String(titles).match(searchedValue)) {
        console.log(initialData[0][i]);
        filtered.push(initialData[0][i]);
      }
    }
    if(filtered.length === 0) {
      let error =
        {
          title : "Unable to search for : " + searchedValue
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
                  <h3 style={{ fontWeight:'700' }}>{each.title}</h3>
                  <h4>By user <b>#{each.userId}</b></h4>
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
