import React from 'react';
import {
  View,
  StyleSheet,
  Alert,
  AsyncStorage,
  Image,
  Text,
} from 'react-native';
import Button from 'react-native-button';
import { Font } from 'expo';
import firebase from 'firebase';


export default class Settings extends React.Component {

  state = {
      fontLoaded: false,
      profilePicUrl: '',
      facebookName: '',
  };


  async componentWillMount() {
    //wait for font to load
    await Font.loadAsync({
      'arial-rounded': require('../assets/fonts/arial-rounded.ttf'),
    });

    this.setState({ fontLoaded: true });

    const fbtoken = await AsyncStorage.getItem('fbtoken');
    if (fbtoken !== null) {
      // Get the user's profile picture using Facebook's Graph API
      const fetchfbprofilepic = await fetch(
        `https://graph.facebook.com/me/picture?redirect=0&height=300&width=300&access_token=${fbtoken}`
      );
      const fbprofilepicurl = `${(await fetchfbprofilepic.json()).data.url}`;
      if (fbprofilepicurl !== null) {
        await this.setState({ profilePicUrl: fbprofilepicurl });
      }
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${fbtoken}`);
      const fbName = `${(await response.json()).name}`;
      if (fbName !== null) {
        await this.setState({ facebookName: fbName });
      }
    }
  }


  render() {
    return (
      <View
        style={styles.container}
      >
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: this.state.profilePicUrl }}
            style={styles.profilePic}
          />
          {
            //if font loaded, render name
            this.state.fontLoaded ? (
              <Text style={styles.nameText}>{this.state.facebookName}</Text>
            ) : null
          }
        </View>
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
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    backgroundColor: '#ff2429ff',
    height: 40,
    width: 90,
    marginBottom: '10%',
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
  },
  profilePic: {
    height: 125,
    width: 125,
    borderRadius: 60,
    marginTop: '15%',
    marginBottom: '13%',
  },
  nameText: {
    color: '#4b4b4bff',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 25,
    fontFamily: 'arial-rounded',
    fontWeight: 'normal',
  },
  profileContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
  },
});
