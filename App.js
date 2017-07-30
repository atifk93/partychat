import React from 'react';
import Expo, { Font } from 'expo';
import {
  StyleSheet,
  Alert,
  Text,
  View,
  Image
} from 'react-native';
import Button from 'react-native-button';
import firebase from 'firebase';

export default class Login extends React.Component {

  state = {
      fontLoaded: false,
    };

  async componentDidMount() {
    await Font.loadAsync({                                        //wait for font to load
      'arial-rounded': require('./assets/fonts/arial-rounded.ttf'),
    });
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
        console.log('We are authenticated now!');
      }

        // Do other things
    });

    this.setState({ fontLoaded: true });
  }


  async loginWithFacebook() {                              //facebook & firebase authentication
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('283785705427946', {
          permissions: ['public_profile', 'user_friends'],
        });
      if (type === 'success') {
                                            // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`);
                                        // Build Firebase credential with the Facebook access token.
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
                                           // Sign in with credential from the Facebook user.
        firebase.auth().signInWithCredential(credential).catch((error) => {
                                                         // Handle Errors here.
      });
        Alert.alert(
          'Logged in!',
          `Hi ${(await response.json()).name}!`,
        );
      }
    }


  render() {
    return (                                  //render login screen
      <View style={styles.container}>
      <Image source={require('./assets/login/background.png')} style={styles.backgroundStyle}>
        {
          this.state.fontLoaded ? (                    //if font loaded, render button
            <Button
              containerStyle={styles.buttonStyle}
              style={styles.buttonText}
              onPress={() => this.loginWithFacebook()}    //facebook auth on button press
            >
        login with facebook
        </Button>
      ) : null
    }
      </Image>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  buttonStyle: {
    backgroundColor: '#00a9faff',
    height: 40,
    width: 180,
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '125%',
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'arial-rounded',
    fontWeight: 'normal',
    fontSize: 17,
  }
});
