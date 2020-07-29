import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './pages/main';

// export default createStackNavigator({
//     Main
// });

const AppNavigator = createStackNavigator(
      {
        Main: {
          screen: Main,
          navigationOptions: { 
            title: 'JS Hunt',
          },
        }
      },
      {
        initialRouteName: 'Main',
        defaultNavigationOptions: {
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: '#DA552F'
          }

        }
      }
  );
  export default createAppContainer(AppNavigator);


