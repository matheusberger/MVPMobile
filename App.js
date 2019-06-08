import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Button, TouchableOpacity, Image, Dimensions } from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";
import QRCodeScanner from "react-native-qrcode-scanner";
import { InputText, StockHeader, QRViewer, ProductInfo, SizePicker, QtyPicker } from './Components.js';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.horizontalViewerContainer}>
        <Image
            style={{
              height: 130,
              resizeMode: 'contain',
              justifyContent: 'center'
            }}
            source={require('./assets/logo_roxo.png')} />
        </View>
        <InputText placeHolder="User"/>
        <InputText placeHolder="Password"/>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('QRCode')}
        />
        <Button
          title="Stock"
          onPress={() => this.props.navigation.navigate('Stock')}
        />
      </ScrollView>
    );
  }
};

class StockScreen extends Component {
  handleButton = () => {
    this.props.navigation.getParam('onReload')();
    this.props.navigation.navigate('QRCode');
  }
  
  render() {
    data = this.props.navigation.getParam('data', 'err');
    return (
      <ScrollView style={styles.container}>
        <StockHeader spaceName={data['space']} />
        <View style={styles.horizontalViewerContainer}>
          <QRViewer code={data['productCode']} />
          <ProductInfo name={data['productName']} owner={data['productOwner']} price={data['productPrice']} />      
        </View>
        <View style={styles.horizontalViewerContainer}>
          <SizePicker />
          <QtyPicker />
        </View>
        <TouchableOpacity
          onPress={() => this.handleButton() }
          style={styles.horizontalViewerContainer}
          activeOpacity={0.5}>
          <Image
            style={{
              height: 50,
              resizeMode: 'contain',
              justifyContent: 'center'
            }}
            source={require('./assets/uparrow.png')}
          />
        </TouchableOpacity>
      </ScrollView>
    );
  }
};

class QRCodeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  onReload = () => {
    this.scanner.reactivate();
  }

  onSuccess = (e) => {
    this.props.navigation.navigate('Stock', {data: JSON.parse(e.data), onReload: this.onReload});
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
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Stock: StockScreen,
  QRCode: QRCodeScreen
},
{
  initialRouteName: 'Home'
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
    backgroundColor: '#BEB1E6',
  },
  headerContainer: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#E7E3F4',
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: "#444C59",
    textAlign: 'center',
  },
  horizontalViewerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'space-around',
    backgroundColor: '#BEB1E6',
  },
  headerContainer: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#BEB1E6',
  },
  verticalViewerContainer: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#BEB1E6',
  },
  horizontalViewerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'space-around',
    backgroundColor: '#BEB1E6',
  },
  headerTitle: {
    flex: 1,
    fontSize: 25,
    color: "#FFFFFF",
    textAlign: 'center',
  },
  text: {
    flex: 1,
    fontSize: 15,
    color: "#FFFFFF",
    textAlign: 'center',
  },
  image: {
    resizeMode: 'contain',
    justifyContent: 'center',
    height: 150
  },
  touchable: {
    padding: 16
  }
});