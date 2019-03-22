import {createDrawerNavigator , createAppContainer} from 'react-navigation';
import ScreenTesting from './ScreenTesting';
import HomeScreen from './Homescreen';

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: HomeScreen,
    },
    
  });
  export default  createAppContainer(MyDrawerNavigator);
  //export default MyApp;