// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home';
import About from './pages/about';
import AuthLogin from './pages/auth/login';
import { ROUTES } from '../constants/routes';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.HOME}>
        <Stack.Screen name={ROUTES.HOME} component={Home} />
        <Stack.Screen name={ROUTES.ABOUT} component={About} />
        <Stack.Screen name={ROUTES.AUTH.LOGIN} component={AuthLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

