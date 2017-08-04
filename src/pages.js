import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import Drawer from 'react-native-drawer';
import { Font } from 'expo';
import Settings from './Settings.js';


export default class Pages extends React.Component {

  state = {
      fontLoaded: false,
  };


  async componentDidMount() {
                                                       //wait for font to load
    await Font.loadAsync({
      'arial-rounded-mt': require('../assets/fonts/arial-rounded-mt.ttf'),
    });

    this.setState({ fontLoaded: true });
  }


  render() {
                                                          //render swiper
    return (
      <Drawer
        styles={drawerStyles}
        type="overlay"
        tapToClose
        openDrawerOffset={0.60}
        closedDrawerOffset={-5}
        tweenHandler={(ratio) => ({ main: { opacity: (2 - ratio) / 2 } })}
        content={<Settings />}
      >
        <Swiper
          showsButtons={false} loop={false}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
        >
          <View style={styles.slide1}>
            <Image
              source={require('../assets/pages/background1.png')}
              style={styles.backgroundStyle}
            >
                <View style={styles.headerStyle}>
                  {
                                                                    //if font loaded, render header
                    this.state.fontLoaded ? (
                      <Text style={styles.headerText}>parties</Text>
                    ) : null
                  }
                </View>
                <ScrollView style={styles.scrollView} />
            </Image>
          </View>
          <View style={styles.slide2}>
            <Image
              source={require('../assets/pages/background2.png')}
              style={styles.backgroundStyle}
            >
              <View style={styles.headerStyle}>
                {
                                                                    //if font loaded, render header
                  this.state.fontLoaded ? (
                    <Text style={styles.headerText}>messages</Text>
                  ) : null
                }
              </View>
              <ScrollView style={styles.scrollView} />
            </Image>
          </View>
        </Swiper>
      </Drawer>
    );
  }
}


const drawerStyles = {
  drawer: {
    backgroundColor: '#fff7f5ff',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  main: {
    paddingLeft: 5,
  },
};


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
});
