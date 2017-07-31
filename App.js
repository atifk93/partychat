import React from 'react';
import firebase from 'firebase';
import Login from './src/Login.js';
import Pages from './src/Pages.js';

export default class App extends React.Component {

  state = {
      userAuthenticated: false
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
      }
        // Do other things
    });
  }


  render() {
                                                     //render login screen
    return (
                                                    //if user authenticated, render Pages
        this.state.userAuthenticated ? (
          <Pages />
        ) : (
          <Login />
        )
    );
  }
}
