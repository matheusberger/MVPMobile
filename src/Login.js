import React from 'react';
import { ScrollView, View, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

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

onSuccess = (e) => {
  //Confirm sale on server
  this.props.navigation.navigate('QRCode')
};

const Login = ({ navigation }, state = { email: "", pass: ""}) => (
  <View style={ styles.container }>
    <View style={ styles.horizontalViewerContainer }>
      <Image
        style={ styles.image }
        source={ require('../assets/logo_verde.png') }
      />
    </View>
    <TextInput
        style={ styles.textInput }
        placeholder="Digite seu E-mail"
        onChangeText={ (text) => state.email=text }
        value={state.email}
    />
    <TextInput
        style={ styles.textInput }
        placeholder="Digite sua senha"
        onChangeText={ (text) => state.pass=text }
        value={state.pass}
    />
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QRCode', state) }>
      <Text style={styles.buttonText}>Logar</Text>
    </TouchableOpacity>
  </View>
);

Login.navigationOptions = {
  header: null
}

export default Login;