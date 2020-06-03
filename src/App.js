import React, { Component } from 'react';
import './css/style.css';

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <Card/>
        <Footer/>
      </div>
    );
  }
}

export default App;
