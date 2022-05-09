import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

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
      <View style={styles.container}>
        <View>
          <Text>Masc Unit Converter</Text>
          <TextInput
            style={styles.input}
            placeholder="Long"
            value={this.state.long}
          />
          <TextInput
            style={styles.input}
            placeholder="Width"
            value={this.state.width}
          />
          <TextInput
            style={styles.input}
            placeholder="Height"
            value={this.state.height}
          />
          <TouchableHighlight style={styles.button}>
            <Text>Calculate</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

// Css styles
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#456345',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
