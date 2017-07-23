import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

export default class Pages extends React.Component {
  render() {
    return (
      <ScrollableTabView
       style={{ marginTop: 20, }}
       renderTabBar={() => <DefaultTabBar />}
      >
     <Text tabLabel='DMs'>DMs</Text>
     <Text tabLabel='parties'>parties</Text>
     <Text tabLabel='party settings'>party settings</Text>
   </ScrollableTabView>
 );
 }
}
