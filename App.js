import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import InstagramLogin from './config/services/instagramView';
import CookieManager from 'react-native-cookies';

export default class App extends Component {

  state = {
    token: "",
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={{ height: 30, width: 70, backgroundColor: "green" }} onPress={() => this.refs.instagramLogin.show()}>
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 30, width: 70, backgroundColor: "red" }} onPress={() => CookieManager.clearAll().then((a) => { alert(a) })}>
          <Text style={{ color: 'white' }}>Claer</Text>
        </TouchableOpacity>
        <InstagramLogin
          ref='instagramLogin'
          clientId='331f9a9519b842319aae653cc50907a0'
          redirectUrl="https://www.instagram.com"
          scopes={['basic', 'public_content']}
          onLoginSuccess={(token) => {
            console.log("Token:  " + token); this.setState({ token })
          }}
          onLoginFailure={(data) => { }// alert("asd" + JSON.stringify(data))
          }
        />
      </View>
    );
  }
}