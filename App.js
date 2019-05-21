import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Button, Text} from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation";
import QRCodeScreen from './screens/QRCodeScreen.js';
import StockScreen from './screens/StockScreen.js';

class HomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Co.Junto</Text>
        </View>
        <Button
          title="QR"
          onPress={() => navigate('QRCode', {name: 'Jane'})}
        />
        <Button
          title="Stock"
          onPress={() => navigate('Stock', {name: 'Jane'})}
        />
      </ScrollView>
    );
  }
};

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
      <AppContainer>
        <HomeScreen/>
      </AppContainer>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#531382',
  },
  headerContainer: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#531382',
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: "#FFFFFF",
    textAlign: 'center',
  }
});