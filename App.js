import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useFonts, AnnieUseYourTelescope_400Regular} from '@expo-google-fonts/annie-use-your-telescope'

import PaginaInicio from './Paginas/PaginaInicio';
import PaginaQuiz from './Paginas/PaginaQuiz';


export default function App() {

  const [loaded] = useFonts({AnnieUseYourTelescope_400Regular})
  
  if(!loaded){
    return null
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#004C2A',
              borderBottomWidth: 3,
            },
            headerTitleStyle: {
              fontFamily: 'AnnieUseYourTelescope_400Regular',
              color: '#fff',
              fontSize: 35,
            }
        }}>
            <Stack.Screen name="Início" component={PaginaInicio} />
            <Stack.Screen name="Quiz" component={PaginaQuiz} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

