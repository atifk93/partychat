import React from 'react';
import Expo, { Font } from 'expo';
import {
  StyleSheet,
  Alert,
  View,
  Image,
  AsyncStorage,
  Platform,
} from 'react-native';
import Button from 'react-native-button';
import firebase from 'firebase';


export default class Login extends React.Component {

  state = {
      fontLoaded: false,
  };


  async componentWillMount() {
    //wait for font to load
    await Font.loadAsync({
      'arial-rounded': require('../assets/fonts/arial-rounded.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  //facebook & firebase authentication
  async loginWithFacebook() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('283785705427946', {
      permissions: ['public_profile', 'user_friends'],
    });
    if (type === 'success') {
      await AsyncStorage.setItem('fbtoken', token);
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
        'Let\'s party!',
        `Logged in as ${(await response.json()).name}`,
      );
    }
  }


  render() {
    //render login screen
    return (
      <View style={styles.container}>
        <Image source={require('../assets/login/background.png')} style={styles.backgroundStyle}>
          {
            //if font loaded, render button
            this.state.fontLoaded ? (
              <Button
                containerStyle={styles.buttonStyle}
                style={styles.buttonText}
                //facebook auth on button press
                onPress={() => this.loginWithFacebook()}
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
    marginTop: (Platform.OS === 'android') ? '117%' : '125%',
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'arial-rounded',
    fontWeight: 'normal',
    fontSize: 17,
    paddingBottom: (Platform.OS === 'android') ? 4 : 0,
  }
});
