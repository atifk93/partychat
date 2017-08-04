import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import Button from 'react-native-button';
import firebase from 'firebase';
import { Font } from 'expo';


export default class Pages extends React.Component {

  state = {
      fontLoaded: false,
  };


  async componentDidMount() {
                                                       //wait for font to load
    await Font.loadAsync({
      'arial-rounded-mt': require('../assets/fonts/arial-rounded-mt.ttf'),
      'arial-rounded': require('../assets/fonts/arial-rounded.ttf'),
    });

    this.setState({ fontLoaded: true });
  }


  render() {
                                                          //render swiper
    return (
      <Swiper
        showsButtons={false} loop={false}
        dot={<View style={styles.dot} />} activeDot={<View style={styles.activeDot} />}
      >
        <View style={styles.slide1}>
          <Image source={require('../assets/pages/background1.png')} style={styles.backgroundStyle}>
            <View style={styles.headerStyle}>
              {
                                                                  //if font loaded, render header
                this.state.fontLoaded ? (
                  <Text style={styles.headerText}>parties</Text>
                ) : null
              }
            </View>
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
          </Image>
        </View>
        <View style={styles.slide2}>
          <Image source={require('../assets/pages/background2.png')} style={styles.backgroundStyle}>
          <View style={styles.headerStyle}>
            {
                                                                //if font loaded, render header
              this.state.fontLoaded ? (
                <Text style={styles.headerText}>messages</Text>
              ) : null
            }
          </View>
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
          </Image>
        </View>
      </Swiper>
    );
  }
}


const styles = StyleSheet.create({
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 9,
    height: 9,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: '#007aff',
    width: 9,
    height: 9,
    borderRadius: 5,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  backgroundStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  headerStyle: {
    flex: 0.16,
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 35,
    fontFamily: 'arial-rounded-mt',
    fontWeight: 'normal',
  },
  scrollView: {
    backgroundColor: '#fff7f5ff',
    width: '100%',
    alignItems: 'center',
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
