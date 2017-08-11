import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';


export default class Loading extends React.Component {

  render() {
    return (
      <View style={styles.slide1}>
        <Image
          source={require('../assets/pages/background1.png')}
          style={styles.backgroundStyle}
        >
          <Spinner
            visible
            color={'#fb7079ff'}
            overlayColor={'rgba(0,0,0,0)'}
          />
          <View style={styles.headerStyle} />
          <ScrollView
            style={styles.scrollView}
            scrollEnabled={false}
          />
        </Image>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  slide1: {
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
    height: (Platform.OS === 'android') ? 85 : 80,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 7,
    marginTop: (Platform.OS === 'android') ? 18 : 8,
  },
  scrollView: {
    backgroundColor: '#fff3f1ff',
    width: '100%',
    alignItems: 'center',
  },
});
