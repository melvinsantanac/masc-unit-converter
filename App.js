import React, {Component} from 'react';
import {Text, View, TextInput, TouchableHighlight} from 'react-native';

export default class MascUnitConverter extends Component {
  constructor() {
    super();

    this.state = {
      long: '',
      width: '',
      height: '',
    };
  }
  render() {
    return (
      <View>
        <Text>Masc Unit Converter</Text>
        <TextInput placeholder="Long" value={this.state.long} />
        <TextInput placeholder="Width" value={this.state.width} />
        <TextInput placeholder="Height" value={this.state.height} />
        <TouchableHighlight>
          <Text>Calculate</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
