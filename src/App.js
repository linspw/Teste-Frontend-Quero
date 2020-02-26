import React from 'react';
import Header from './Components/Containers/Header';
import Footer from './Components/Containers/Footer';
import MainContent from './Components/Containers/MainContent';
import Modal from './Components/Containers/Modal';
import './Components/Elements/Input/Input.scss';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Header/>
        <MainContent/>
        <Footer/>
        <Modal/>
      </div>
    );
  }
}

export default App;
