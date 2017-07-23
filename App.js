import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Button from 'apsl-react-native-button';
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
          style={styles.buttonStyle}
          textStyle={styles.buttonText}
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
    flexDirection: 'row',
    backgroundColor: 'rgb(0,0,0)',
    resizeMode: 'contain',
    width: null,
    height: null,
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#00a9faff',
    height: 40,
    width: 180,
    borderWidth: 1,
    borderColor: '#00a9faff',
    borderRadius: 50,
    marginTop: 400,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'arial-rounded',
    fontSize: 17,
  }
});
