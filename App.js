import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Button from 'react-native-button';
import { Font } from 'expo';

export default class App extends React.Component {

  state = {
      fontLoaded: false,
    };

  async componentDidMount() {
    await Font.loadAsync({
      'arial-rounded': require('./assets/fonts/arial-rounded.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Image source={require('./assets/login/background.png')} style={styles.container}>
        {
          this.state.fontLoaded ? (
            <Button
              containerStyle={styles.buttonStyle}
              style={styles.buttonText}
            >
        login with facebook
        </Button>
      ) : null
    }
      </Image>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0,0,0)',
    resizeMode: 'contain',
    width: null,
    height: null,
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#00a9faff',
    height: 40,
    width: 180,
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    marginTop: '125%',
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'arial-rounded',
    fontSize: 17,
  }
});
