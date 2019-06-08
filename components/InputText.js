import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class InputText extends Component {
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