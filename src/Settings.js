import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import Button from 'react-native-button';
import { Font } from 'expo';
import firebase from 'firebase';


export default class Settings extends React.Component {

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


  render() {
    return (
      <ScrollView
        style={styles.scrollView}
        scrollEnabled={false}
      >
      {
         //if font loaded, render button
         this.state.fontLoaded ? (
            <Button
              containerStyle={styles.buttonStyle}
              style={styles.buttonText}
              //sign out firebase on button press
              onPress={() => Alert.alert(
                'Are you sure?',
                null,
                [{ text: 'cancel', style: 'cancel' },
                { text: 'log out', onPress: () => firebase.auth().signOut() }],
                { cancelable: false }
              )}
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
    justifyContent: 'flex-end',
  },
  buttonStyle: {
    backgroundColor: '#ff2429ff',
    height: 40,
    width: 90,
    margin: 15,
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
