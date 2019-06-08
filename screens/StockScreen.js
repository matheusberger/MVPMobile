import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import { NavigationActions } from 'react-navigation';

class StockHeader extends Component {
  render() {
    return (
    <View style={styles.headerContainer}>
        <Text style={styles.title}>{this.props.spaceName}</Text>
    </View>
    );
  }
};

class QRViewer extends Component {
  render() {
    return (
    <View style={styles.verticalViewerContainer}>
      <Image style={styles.image} source={require('../assets/qrcodesample.png')} />
      <Text style={styles.title}>{this.props.code}</Text>
    </View>
    );
  }
};

class ProductInfo extends Component {
  render() {
    return (
    <View style={styles.verticalViewerContainer}>
      <Text style={styles.text}>{this.props.name}</Text>
      <Text style={styles.text}>{this.props.owner}</Text>
      <Text style={styles.title}>R$ {this.props.price}</Text>
    </View>
    );
  }
};

class SizePicker extends Component {
  render() {
    return (
    <View style={styles.verticalViewerContainer}>
      <Text style={styles.title}>TAMANHO</Text> 
      <Text style={styles.text}>P</Text>
      <Text style={styles.text}>M</Text>
      <Text style={styles.text}>G</Text>
    </View>
    );
  }
};

class QtyPicker extends Component {
  render() {
    return (
    <View style={styles.verticalViewerContainer}>
      <Text style={styles.title}>QUANTIDADE</Text> 
      <View style={styles.horizontalViewerContainer}>
        <Text style={styles.text}>-</Text>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>+</Text>
      </View>
    </View>
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
