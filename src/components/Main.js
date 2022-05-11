/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  StatusBar,
  Alert,
} from 'react-native';
import {styles} from '../styles/mainStyles';

const Main = () => {
  // Logical
  const [long, setLong] = useState();
  const [Width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [result, setResult] = useState(0);

  const getResult = () => {
    let dimensions = [long, Width, height];
    let cubicFeets = 0;

    if (!long || !Width || !height) {Alert.alert('You should specify inches in each input to calculate the conversion.'); return;}

    const getCubitFeets = dimensions.reduce(
      (prevValue, currValue) => prevValue * currValue,
    );

    cubicFeets = getCubitFeets / 1728;
    dimensions.splice(0, dimensions.length);

    setResult(cubicFeets);
  };

  const reseter = () => {
    // Alert.alert('Hola');
    setResult(0);
    // long.clear();
  };

  // View
  return (
    <View style={styles.wrapper}>
      <StatusBar backgroundColor="hsl(207, 50%, 15%)" barStyle="default" />
      <View style={styles.header}>
        <Text style={styles.title}>Masc</Text>
        <Text style={styles.subTitle}>Unit Converter</Text>
      </View>
      <View style={styles.result}>
        <Text style={styles.convertion}>Converting inches into cubic feet</Text>
        <Text style={styles.resultText}>{result.toFixed(2)}</Text>
      </View>
      <View style={styles.main}>
        <TextInput
          style={styles.input}
          placeholder="Long"
          onChangeText={val => setLong(Number(val))}
          keyboardType="numeric"
          placeholderTextColor="hsla(199, 10%, 58%, .3)"
        />
        <TextInput
          style={styles.input}
          placeholder="Width"
          onChangeText={val => setWidth(Number(val))}
          keyboardType="numeric"
          placeholderTextColor="hsla(199, 10%, 58%, .3)"
        />
        <TextInput
          style={styles.input}
          placeholder="Height"
          onChangeText={val => setHeight(Number(val))}
          keyboardType="numeric"
          placeholderTextColor="hsla(199, 10%, 58%, .3)"
        />
        <View style={styles.btnGroup}>
          <TouchableHighlight style={styles.btnReseter} onPress={reseter}>
            <Text style={styles.btnTextReseter}>Reset</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={getResult}>
            <Text style={styles.btnText}>Calculate</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Main;
