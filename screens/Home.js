import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';

class StockHeader extends Component {
  render() {
    return (
    <View style={styles.headerContainer}>
        <Text style={styles.title}>{this.props.spaceName}</Text>
    </View>
    );
  }
};

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Co.Junto',
    header: null
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <StockHeader spaceName="HOME" />
        <Button
          title="QR"
          onPress={() => navigate('QRCodeScreen', {name: 'Jane'})}
        />
        <Button
          title="Stock"
          onPress={() => navigate('StockScreen', {name: 'Jane'})}
        />
      </ScrollView>
    );
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
  verticalViewerContainer: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#531382',
  },
  horizontalViewerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'space-around',
    backgroundColor: '#531382',
  },
  headerTitle: {
    flex: 1,
    fontSize: 25,
    color: "#FFFFFF",
    textAlign: 'center',
  },
  title: {
    flex: 1,
    fontSize: 20,
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
  }
});
