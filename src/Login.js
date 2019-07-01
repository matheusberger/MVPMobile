import React from 'react';
import { ScrollView, View, Button, Image, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#BEB1E6'
  },
  horizontalViewerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'space-around',
    backgroundColor: '#BEB1E6'
  },
  image: {
    height: 130,
    resizeMode: 'contain',
    justifyContent: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center'
  }
});

onSuccess = (e) => {
  //Confirm sale on server
  this.props.navigation.navigate('QRCode')
};

state = { user: "User", pass: "Password" };

const Login = ({ navigation }) => (
  <View style={ styles.container }>
    <View style={ styles.horizontalViewerContainer }>
      <Image
        style={ styles.image }
        source={ require('../assets/logo_roxo.png') }
      />
    </View>
    <TextInput
        style={ styles.textInput }
        onChangeText={(text) => this.setState({user})}
        value={this.state.user}
    />
    <TextInput
        style={ styles.textInput }
        onChangeText={(text) => this.setState({pass})}
        value={this.state.pass}
    />
    <Button
      title="Login"
      onPress={ this.onLogin }
    />
  </View>
);

Login.navigationOptions = {
  header: null
}

export default Login;