import React, { Component } from 'react';
import './App.css';
import Dnd from './Components/Dnd';
//import DragDropContext from 'react-beautiful-dnd';

//const { DragDropContext } = window.ReactBeautifulDnd;

class App extends Component {

  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Task Board</h1>
        </header>
        
        <div className="App">
          <Dnd />
        </div>
        
      </div>
  );
  }
}

export default App;
