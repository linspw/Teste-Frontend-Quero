import React from 'react';
import Header from './Components/Containers/Header';
import Footer from './Components/Containers/Footer';
import MainContent from './Components/Containers/MainContent';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Header/>
        <MainContent/>
        <Footer/>
      </div>
    );
  }
}

export default App;
