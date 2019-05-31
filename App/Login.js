import React, {Component} from 'react';
import {Platform, AppRegistry, StyleSheet, Text, View} from 'react-native';


export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hello</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Login',()=> Login)