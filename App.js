/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Platform,
  Label,
  ActivityIndicator,
  TextInput,
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  KeyboardAvoidingView,
  Linking
} from 'react-native';
// import Login from './App/Login';
import { Input, FormInput, Button } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import validation from 'validation'
import validate from 'validation_wrapper'




export default class App extends Component {
  constructor() {
    super()
    this.state = {}
    this.state.customStyle = {
      color: 'red'
    }
    setInterval(() => {
      if (this.state.customStyle.color == 'red') {
        this.setState({
          customStyle: {
            color: 'green'
          }
        })
      } else {
        this.setState({
          customStyle: {
            color: 'red'
          }
        })
      }
    }, 1000)
  }
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: ''
    }
  }

  register() {
    const emailError = validate('email', this.state.email)
    const passwordError = validate('password', this.state.password)

    this.setState({
      emailError: emailError,
      passwordError: passwordError
    })

    if (!emailError && !passwordError) {
      alert('Details are valid!')
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        behavior='padding'
      >
        <View style={styles.container}>
          <View style={styles.Header}>
            <Text style={[styles.welcome, this.state.customStyle]}>TODO</Text>
            <Text style={[styles.SignUp_Heading]}>Sign Up</Text>
            <View style={styles.Email_input}>
              <TextInput
                placeholder='Email'
                onChangeText={value => this.setState({ email: value })}
                onBlur={() => {
                  this.setState({
                    emailError: validate('email', this.state.email)
                  })
                }}
                error={this.state.emailError}
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor='white'
                style={{ height: 40, color: 'white', paddingLeft: 20, borderColor: 'gray', borderRadius: 20, width: 300, borderWidth: 1 }}
              // onChangeText={(text) => this.setState({text})}
              // value={this.state.text}
              />
            </View>
            <View style={styles.password_input}>
              <TextInput
                placeholder='Password'
                placeholderTextColor='white'
                type= 'password'
                style={{ height: 40, color: 'white', paddingLeft: 20, borderColor: 'gray', borderRadius: 20, width: 300, borderWidth: 1 }}
              // onChangeText={(text) => this.setState({text})}
              // value={this.state.text}
              />
            </View>
            <View style={styles.Cpassword_input}>
              <TextInput
                placeholder='Confirm Password'
                placeholderTextColor='white'
                style={{ height: 40, color: 'white', paddingLeft: 20, borderColor: 'gray', borderRadius: 20, width: 300, borderWidth: 1 }}
              // onChangeText={(text) => this.setState({text})}
              // value={this.state.text}
              />
            </View>
            <View style={{ paddingTop: 30 }}>
              <Button
                style={{ borderRadius: 5 }}
                title="Submit"
                onPress={this.validateRegister}
              />
            </View>
            <Text style={{ color: 'white', textAlign: 'center', paddingTop: 50, paddingBottom: 65 }}
              onPress={() => Linking.openURL('https://google.com')}>
              Already Signup? Login
            </Text>
          </View>
          <View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
AppRegistry.registerComponent('App', () => App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333148',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  Header: {
    flex: 1
  },
  SignUp_Heading: {
    paddingTop: 40,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  Email_input: {
    paddingTop: 40
  },
  password_input: {
    paddingTop: 30
  },
  Cpassword_input: {
    paddingTop: 30
  }
});
