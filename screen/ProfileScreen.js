import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
 


export default class ProfileScreen extends React.Component {
  render() {
    return (
      <view style = {styles.container}>
              <Text>ProfileScreen</Text>  
      ></view>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
}); 
