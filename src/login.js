import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Button from 'react-native-button';
import { Font } from 'expo';

export default class Login extends React.Component {

  state = {
      fontLoaded: false,
    };

  async componentDidMount() {
    await Font.loadAsync({                            //wait for font to load
      'arial-rounded': require('./assets/fonts/arial-rounded.ttf'),
    });

    this.setState({ fontLoaded: true });
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
