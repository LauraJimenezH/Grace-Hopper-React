import React, { Component } from 'react';
  import Main from './Main';
  import Header from './Header';
  import Resume from './Resume';

class App extends Component {
  constructor (...args){
    super(...args)
  }
  render() {
    return (
      <div>
     <Header/>
     <Main/>
     <Resume/>
     </div>
    )   
  }
}

export default App;
