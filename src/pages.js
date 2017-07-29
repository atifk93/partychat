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
    await Font.loadAsync({                          //wait for font to load
      'arial-rounded-mt': require('./assets/fonts/arial-rounded-mt.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

render() {
  return (                                        //render swiper

<Swiper style={styles.wrapper} showsButtons={false}>

  <View style={styles.slide1}>

    <Image source={require('./assets/pages/background.png')} style={styles.backgroundStyle}>

    {
      this.state.fontLoaded ? (                          //if font loaded, render header
        <Text style={styles.headerStyle}>parties</Text>
      ) : null
    }

      <View style={styles.partyList} />

    </Image>

  </View>

  <View style={styles.slide2}>

    <Image source={require('./assets/pages/background.png')} style={styles.backgroundStyle}>

    {
      this.state.fontLoaded ? (                     //if font loaded, render header
        <Text style={styles.headerStyle}>messages</Text>
      ) : null
    }

      <View style={styles.partyList} />

    </Image>

  </View>

  <View style={styles.slide3}>

    <Image source={require('./assets/pages/background.png')} style={styles.backgroundStyle}>

    {
      this.state.fontLoaded ? (                      //if font loaded, render header
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
    height: '85%',
    width: '97.5%',
  },
});
