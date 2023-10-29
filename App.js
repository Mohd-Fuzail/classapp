import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screeen/Home';
import About from './src/screeen/About';
import Contact from './src/screeen/Contact';
import Course from './src/screeen/Course';
import Detail from './src/screeen/Detail';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name='Home'>
        {(props) => <Home channelName={"MOHD FUZAIL"}/>}
      </Stack.Screen> */}
      
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;