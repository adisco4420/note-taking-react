import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/haeder/Header';
import ListNotes from './components/list-note/List-Note';

// import Example3 from './components/test'

class App extends Component {
  state = {
    listNote: JSON.parse(localStorage.getItem('list-note'))
  }
  render() {
    return (
      <div className="App">
        {/* <Header />  */}
        <ListNotes alLNoteProps={this.state.listNote}  />
        {/* <Example3 /> */}
      </div>
    );
  }
}

export default App;
