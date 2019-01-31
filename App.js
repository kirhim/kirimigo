
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import StartScreen from './src/HowToRide/StartScreen'
import MapView from 'react-native-maps'

const { width, height } = Dimensions.get('window')
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {

  render() {
    return (
      <View style={{flex:1}}>
      <View style={{flex:1}}>
        <MapView style={styles.map}
        showsUserLocation
        initialRegion={{
      latitude: 37.523814,
      longitude:  126.927494,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}/>
      </View>
      <View style={{height:80, width:'100%', backgroundColor:'gray'}}>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
   ...StyleSheet.absoluteFillObject,
 },
 infoWrapper: {
   flex:1,
   left:0,
   right:0,
   top:0,
   bottom:0,
   position:'absolute',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 }
});
