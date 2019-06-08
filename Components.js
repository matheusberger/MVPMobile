import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';


export class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.placeHolder };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray',
                borderWidth: 1,
                textAlign: 'center',}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

export class StockHeader extends Component {
  render() {
    return (
    <View style={styles.headerContainer}>
        <Text style={styles.title}>{this.props.spaceName}</Text>
    </View>
    );
  }
};

export class QRViewer extends Component {
  render() {
    return (
    <View style={styles.verticalViewerContainer}>
      <Text style={styles.title}>{this.props.code}</Text>
    </View>
    );
  }
};

export class ProductInfo extends Component {
  render() {
    return (
    <View style={styles.verticalViewerContainer}>
      <Text style={styles.text}>{this.props.name}</Text>
      <Text style={styles.text}>{this.props.owner}</Text>
      <Text style={styles.title}>{this.props.price}</Text>
    </View>
    );
  }
};

export class SizePicker extends Component {
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

export class QtyPicker extends Component {
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
  cameraContainer: {
    height: Dimensions.get('window').height,
  },
  touchable: {
    padding: 16
  }
});