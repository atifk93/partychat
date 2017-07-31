import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import { Font } from 'expo';

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
<Swiper style={styles.wrapper} showsButtons={false}>
  <View style={styles.slide1}>
    <Image source={require('../assets/pages/background1.png')} style={styles.backgroundStyle}>
    {
                                                        //if font loaded, render header
      this.state.fontLoaded ? (
        <Text style={styles.headerStyle}>parties</Text>
      ) : null
    }
      <View style={styles.partyList} />
    </Image>
  </View>
  <View style={styles.slide2}>
    <Image source={require('../assets/pages/background2.png')} style={styles.backgroundStyle}>
    {
                                                       //if font loaded, render header
      this.state.fontLoaded ? (
        <Text style={styles.headerStyle}>messages</Text>
      ) : null
    }
      <View style={styles.partyList} />
    </Image>
  </View>
  <View style={styles.slide3}>
    <Image source={require('../assets/pages/background.png')} style={styles.backgroundStyle}>
    {
                                                        //if font loaded, render header
      this.state.fontLoaded ? (
        <Text style={styles.headerStyle}>create party</Text>
      ) : null
    }
    </Image>
  </View>
</Swiper>
);
}
}


const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  backgroundStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  headerStyle: {
    color: '#ffffff',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 35,
    fontFamily: 'arial-rounded-mt',
    fontWeight: 'normal',
    padding: 20,
  },
  partyList: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
  },
});
