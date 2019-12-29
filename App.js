import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  SafeAreaView
} from 'react-native';

const App  = () => {
  return (
        <SafeAreaView style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={[ styles.textStyle,{ color: 'white' }]}>Tic Tac Toe</Text>
          </View>
          <View style={ styles.boxContainer }>
            <View style={[ styles.box,{ borderTopWidth: 0, borderLeftWidth: 0 }]}></View>
            <View style={[ styles.box,{ borderTopWidth: 0 }]}></View>
            <View style={[ styles.box,{ borderTopWidth: 0, borderRightWidth: 0 }]}></View>
          </View>
          <View style={styles.boxContainer}>
            <View style={[ styles.box,{  borderLeftWidth: 0 }]}></View>
            <View style={styles.box}></View>
            <View style={[ styles.box,{  borderRightWidth: 0 }]}></View>
          </View>
          <View style={styles.boxContainer}>
            <View style={[ styles.box,{ borderBottomWidth: 0, borderLeftWidth: 0 }]}></View>
            <View style={[ styles.box,{ borderBottomWidth: 0 }]}></View>
            <View style={[ styles.box,{ borderBottomWidth: 0, borderRightWidth: 0 }]}></View>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle,{color: 'red'}]}>Game Status : In Progress</Text>
          </View>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'black'
  },
  boxContainer: {
    flexDirection: 'row',
    flex: 1,
    height: 100
  },
  box: {
    borderWidth: 1,
    borderColor: 'orange',
    flex: 1,
    },
    textContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 50
    },
    textStyle: {
      fontWeight: 'bold',
      fontSize: 30
    }
});

export default App;
