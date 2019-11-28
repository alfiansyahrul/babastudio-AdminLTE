import React, { Component } from 'react';
import Header from './component/Header';
import Slider from './component/Slider';
import Content from './component/Content'


class App extends Component {

  render() {
    return (
      <div>
        
        <Header />
        <Slider/>
        <Content />
      </div>
    );
  }
}

export default App;