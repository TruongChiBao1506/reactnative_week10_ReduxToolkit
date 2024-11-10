import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen_01 from './Screen01';
import Screen_02 from './Screen02';
import Screen_03 from './Screen03';
import Screen_04 from './Screen04';
import { Provider } from 'react-redux';
import { store } from './redux/Store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Screen01" component={Screen_01} />
          <Stack.Screen name="Screen02" component={Screen_02} />
          <Stack.Screen name="Screen03" component={Screen_03} />
          <Stack.Screen name="Screen04" component={Screen_04} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

export default App;