/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, AppRegistry, StyleSheet, Text, Image, View } from 'react-native';
// import Login from './App/Login';




export default class App extends Component {
  constructor() {
    super()
    this.state = {}
    this.state.customStyle = {
      color: 'red'
    }
    setInterval(() => {
      if(this.state.customStyle.color == 'red'){ 
      this.setState({
        customStyle: {
          color: 'green'
        }
      })
    } else{
      this.setState({
        customStyle: {
          color: 'red'
        }
      })
    }
    }, 1000)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome, this.state.customStyle]}>TODO</Text>
      </View>
    );
  }
}
AppRegistry.registerComponent('App', () => App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
