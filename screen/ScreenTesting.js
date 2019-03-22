import React , { Component } from 'react';
import {View , Text , Button , Image,StyleSheet} from 'react-native';
import UserImg from '../Images/user.png';

class ScreenTesting extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={UserImg}
          style={{height: 25 , width: 25}}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Open Drawer"
        />
      );
    }
  }

  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });

  export default ScreenTesting;