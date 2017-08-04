import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import Button from 'react-native-button';
import { Font } from 'expo';
import firebase from 'firebase';


export default class Settings extends React.Component {

  state = {
      fontLoaded: false,
  };


  async componentDidMount() {
                                                       //wait for font to load
    await Font.loadAsync({
      'arial-rounded': require('../assets/fonts/arial-rounded.ttf'),
    });

    this.setState({ fontLoaded: true });
  }


  render() {
    return (
      <ScrollView style={styles.scrollView}>
      {
                                                     //if font loaded, render button
       this.state.fontLoaded ? (
          <Button
            containerStyle={styles.buttonStyle}
            style={styles.buttonText}
                                                   //facebook auth on button press
            onPress={() => firebase.auth().signOut()}
          >
            log out
          </Button>
        ) : null
      }
      </ScrollView>
    );
  }

}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#ff2429ff',
    height: 40,
    width: 90,
    margin: 5,
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'arial-rounded',
    fontWeight: 'normal',
    fontSize: 17,
  }
});
