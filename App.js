import React from 'react';
import firebase from 'firebase';
import Login from './src/Login.js';
import Pages from './src/Pages.js';
import Loading from './src/Loading.js';


export default class App extends React.Component {

  state = {
      userAuthenticated: null
  };


  componentWillMount() {
  //initialize firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyBC561BzZ0J_gMP89bDiJxUtXOXp-24ESc',
      authDomain: 'partychat-67c9d.firebaseapp.com',
      databaseURL: 'https://partychat-67c9d.firebaseio.com',
      projectId: 'partychat-67c9d',
      storageBucket: 'partychat-67c9d.appspot.com',
      messagingSenderId: '608346416500',
    });
  // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.setState({ userAuthenticated: true });
      } else {
        this.setState({ userAuthenticated: false });
      }
  // Do other things
    });
  }


  render() {
    //conditional rendering
    switch (this.state.userAuthenticated) {
      case true:
        return <Pages />;
      case false:
        return <Login />;
      default:
        return <Loading />;
    }
  }
}
