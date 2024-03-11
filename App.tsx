import React, {PureComponent} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {MealSelectionScreen} from './src/screens/MealSelectionScreen';
import DefaultScreenOptions from './src/navigation/DefaultScreenOptions';

interface AppProps {}
interface IAppState {}
const Stack = createStackNavigator();

class App extends PureComponent<AppProps, IAppState> {
  get screenOptions() {
    return {...DefaultScreenOptions};
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealSelection"
          screenOptions={this.screenOptions}>
          <Stack.Screen
            name="MealSelection"
            component={MealSelectionScreen}
            options={{title: 'Meal Roulette'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
