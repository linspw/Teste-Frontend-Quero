import React from 'react';
import { connect } from 'react-redux';
import Header from './Components/Containers/Header';
import Footer from './Components/Containers/Footer';
import MainContent from './Components/Containers/MainContent';
import Modal from './Components/Containers/Modal';
import './Components/Elements/Input/Input.scss';
import * as InterfaceActions from './Redux/Actions/interfaceActions';
class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Header/>
        <MainContent/>
        <Footer/>
        {this.props.Modal.status && <Modal/>}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
      Modal: store.InterfaceState.Modal
  }
}
const mapDispatchToProps = {
  ...InterfaceActions
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
