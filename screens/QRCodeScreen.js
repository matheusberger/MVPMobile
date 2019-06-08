import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner";
import PropTypes from "prop-types";

class QRCodeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    success: null,
    url: '',
  };

  handleButton = () => {
    this.setState({ success: false })
    this.scanner.reactivate()
  }

  onSuccess = e => {
    this.setState({ success: true, url: e.data });
    this.props.navigation.navigate('StockScreen');
  };

  render() {
    return (
      <View style={styles.container}>
        <QRCodeScanner
          onRead={this.onSuccess}
          showMarker={true}
          checkAndroid6Permissions={true}
          ref={(elem) => { this.scanner = elem }}
          cameraStyle={styles.cameraContainer}
          // reactivate={true}
          bottomContent={
            <View style={styles.touchable}>
              {this.state.success && (
                <Text style={styles.text}>OK! Got It!</Text>
              )}
            </View>
          }
        />
      </View>
    );
  }
}

QRCodeScreen.propTypes = {
  navigation: PropTypes.object,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  touchable: {
    padding: 16
  },
  text: {
    fontSize: 21,
    color: "rgb(0,122,255)"
  }
});