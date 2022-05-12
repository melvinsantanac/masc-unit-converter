/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  StatusBar,
  Alert,
} from 'react-native';
import {styles} from '../styles/mainStyles';

const Main = props => {
  // Logical
  const longValue = useRef();
  const [result, setResult] = useState(0);
  let [long, setLong] = useState();
  let [Width, setWidth] = useState();
  let [height, setHeight] = useState();

  const getResult = () => {
    long = Number(long);
    Width = Number(Width);
    height = Number(height);

    let dimensions = [long, Width, height ];
    let cubicFeets = 0;

    if (!long || !Width || !height) {Alert.alert('You should specify inches in each input... Use numerical value only.'); return;}

    const getCubitFeets = dimensions.reduce(
      (prevValue, currValue) => prevValue * currValue,
    );

    cubicFeets = getCubitFeets / 1728;
    dimensions.splice(0, dimensions.length);

    setResult(cubicFeets);
  };

  const reseter = () => {
    setResult(0);
    setLong('');
    setWidth('');
    setHeight('');
    longValue.current.focus();
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
          autoFocus
          ref={longValue}
          style={styles.input}
          placeholder="Long"
          value={long}
          onChangeText={val => setLong(val)}
          keyboardType="numeric"
          placeholderTextColor="hsla(199, 10%, 58%, .3)"
        />
        <TextInput
          style={styles.input}
          placeholder="Width"
          value={Width}
          onChangeText={val => setWidth(val)}
          keyboardType="numeric"
          placeholderTextColor="hsla(199, 10%, 58%, .3)"
        />
        <TextInput
          style={styles.input}
          placeholder="Height"
          value={height}
          onChangeText={val => setHeight(val)}
          keyboardType="numeric"
          placeholderTextColor="hsla(199, 10%, 58%, .3)"
        />
        <View style={styles.btnGroup}>
          <TouchableHighlight style={styles.btnReseter} onPress={reseter} underlayColor="hsla(199, 35%, 85%, .5)">
            <Text style={styles.btnTextReseter}>Reset</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={getResult} underlayColor="hsla(199, 50%, 65%, .8)">
            <Text style={styles.btnText}>Calculate</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Main;
