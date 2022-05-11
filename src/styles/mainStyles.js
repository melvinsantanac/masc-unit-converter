/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

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
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'hsl(199, 50%, 65%)',
    padding: 16,
    borderRadius: 7,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
  btnReseter: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'hsla(199, 35%, 85%, .9)',
    padding: 16,
    borderRadius: 7,
    marginRight: 12,
  },
  btnTextReseter: {
    fontSize: 20,
    color: 'hsl(207, 10%, 40%)',
  },
});

export {styles};
