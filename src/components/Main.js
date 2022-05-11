/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';

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
        <TouchableHighlight style={styles.button} onPress={getResult}>
          <Text style={styles.btnText}>Calculate</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  wrapper: {
    minHeight: '100%',
    backgroundColor: 'hsl(0, 0%, 99%)',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'hsl(207, 50%, 18%)',
  },
  title: {
    color: 'hsl(199, 40%, 80%)',
    fontSize: 35,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'hsla(199, 40%, 80%, .9)',
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  convertion: {
    color: 'hsl(207, 10%, 40%)',
    fontSize: 18,
    alignSelf: 'center',
    paddingBottom: 16,
  },
  result: {
    height: 100,
    padding: 12,
  },
  resultText: {
    textAlign: 'right',
    fontSize: 40,
    color: 'hsl(207, 10%, 40%)',
  },
  main: {
    padding: 12,
  },
  input: {
    height: 50,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'transparent',
    borderBottomColor: 'hsl(199, 25%, 80%)',
    color: 'hsl(207, 10%, 40%)',
    borderRadius: 7,
    fontSize: 20,
  },
  button: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'hsla(199, 20%, 85%, .9)',
    padding: 10,
    borderRadius: 7,
  },
  btnText: {
    fontSize: 20,
    color: 'hsl(207, 10%, 40%)',
  },
});

export default Main;
