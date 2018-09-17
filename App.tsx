import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Strings from './locales/english';

export default class App extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text>{Strings.app.title}</Text>
        <Text>{Strings.app.body('2018')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
