import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ActivityIndicator
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Header, Left, Right, Icon } from 'native-base';
import SettingsScreen from '../screen/SettingsScreen';
import ProfileScreen from '../screen/ProfileScreen';
import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';
import UserImg from '../Images/user.png';

export default class HomeScreen extends React.Component {
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

      //    <AppDrawerNavigator/>,
      <View style={styles.container}>
        <View style={{flex: 0.3}}>
          <Header>
            <Left>
              <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
            </Left>
          </Header>
        </View>
        <View style={{flex: 3}}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region=
            {{
              latitude: 24.860735,
              longitude: 67.001137,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
          </MapView>

        </View>
      </View>
    );
  }
}

const CustomDrawerComponents = (props) => (

  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150, backgroundColor: 'White', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../Images/user.png')} style={{ height: 120, width: 120, borderRadius: 60 }} />
    </View>
    <ScrollView>

      <DrawerItems {...props} />

    </ScrollView>
  </SafeAreaView>

);

componentDidMount = () => {

  setTimeout(() => this.setState({ statusBarHeight: 2 }), 500)

  navigator.geolocation.getCurrentPosition(
    (res) => {
      this.setState({
        coords: res.coords,
        marker: res.coords

      });
    },
    (error) => {
      alert(error)
    },
    {
      timeout: 10000
    }
  );
}

const AppDrawerNavigator = createDrawerNavigator({
  //Home: HomeScreen,
  Home: { screen: SettingsScreen }
  //Profile: ProfileScreen,
  //Settings:  SettingsScreen

}, {

    contentComponent: CustomDrawerComponents,
    contentOptions: {

      activeTintColor: 'green'
    }
  });




const styles = StyleSheet.create({
  container: {
    flex: 1
    //...StyleSheet.absoluteFillObject,

    //justifyContent: 'flex-end',
    //alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});