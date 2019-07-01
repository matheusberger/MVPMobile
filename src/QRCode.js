import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import QRCodeScanner from "react-native-qrcode-scanner";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#BEB1E6'
  }
});

onSuccess = (e) => {
  //Confirm sale on server
  this.scanner.reactivate();
};

const {curWidth, curHeight} = Dimensions.get('window');

const QRCode = ({ navigation }) => (
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

QRCode.navigationOptions = {
  header: null
}

export default QRCode;