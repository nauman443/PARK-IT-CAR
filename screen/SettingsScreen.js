import React, {Component} from 'react';
import {StyleSheet, Text, View , Button} from 'react-native';
//import icon from '../Images/logo';
 


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    
    
  };
  render() {
    return (
      <View style = {styles.container}>
         <Button
        onPress={() => this.props.navigation.openDrawer()}
        title="Go to notifications"
      />        
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
