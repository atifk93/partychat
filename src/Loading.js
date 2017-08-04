import React from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';


export default class Loading extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/loading/background.png')} style={styles.backgroundStyle}>
          <Spinner
            visible
            overlayColor={'rgba(0,0,0,0)'}
          />
        </Image>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
});
