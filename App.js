import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Button, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";
import QRCodeScanner from "react-native-qrcode-scanner";
import firebase from 'react-native-firebase';

class Login extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: '',
    pass: '',
    isAuthenticated: false
  };

  entrar = async () => {
    const { email, pass, isAuthenticated } = this.state;
    
    try {
      const user  = await firebase.auth().signInWithEmailAndPassword(email, pass);
      this.setState({ isAuthenticated: true });
      this.props.navigation.navigate('QRCode', user);
    } catch (err) {
      Alert.alert("E-mail ou senha inválidos");
    }
  };

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.horizontalViewerContainer }>
          <Image
            style={ styles.image }
            source={ require('./assets/logo_verde.png') }
          />
        </View>
        <TextInput
            style={ styles.textInput }
            placeholder="Digite seu E-mail"
            value={this.state.email}
            onChangeText={ val =>  this.setState({ email: val }) }
        />
        <TextInput
            style={ styles.textInput }
            placeholder="Digite sua senha"
            secureTextEntry
            value={this.state.pass}
            onChangeText={ val => this.setState({ pass: val}) }
        />
        <TouchableOpacity style={styles.button} onPress={ this.entrar }>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

class QRCodeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  onReload = () => {
    this.scanner.reactivate();
  };

  state = {
    info: ''
  }

  onSuccess = (e) => {
    let data = JSON.parse(e.data).product;
    

    
    this.onReload();
  };

  render() {
    const {curWidth, curHeight} = Dimensions.get('window');
    
    return (
      <View style={styles.container}>
        <QRCodeScanner
          onRead={this.onSuccess}
          showMarker={true}
          checkAndroid6Permissions={true}
          ref={(elem) => { this.scanner = elem }}
          cameraStyle={height=curHeight}
        />
        <Text style={styles.buttonText}>{this.state.info}</Text>
      </View>
    );
  };
}

const AppNavigator = createStackNavigator({
  Login: Login,
  QRCode: QRCodeScreen
},
{
  initialRouteName: 'Login'
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
  render() {
    return (
      <AppContainer />
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#D2E5B3'
  },
  horizontalViewerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'space-around',
    backgroundColor: '#D2E5B3'
  },
  image: {
    height: 170,
    alignSelf: 'center',
    resizeMode: 'contain',
    justifyContent: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    marginBottom:10
  },
  button: {
    height : 35,
    backgroundColor: '#BFB3E2',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});