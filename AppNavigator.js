import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Boxes from './src/Boxes';
import Textbook from './screens/Textbook'
import Notepad from './screens/NotePad'
import Question from './screens/Question'
import StudyTips from './screens/StudyTips'
import Timer from './screens/Timer'
import {Image} from 'react-native';
import NotePadApp from './NotepadFolder/NotePadApp';
const Stack = createStackNavigator();

const MyCustomHeaderBackImage = () => (
  <Image
    source={require('./assets/BackButton.png')}
    style={{width: 22, height: 22, tintColor: '#fff'}}
  />
);

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen
          name="Screen1"
          component={Boxes}
          options={{headerShown: false}}
          key="landing"
        />


        <Stack.Screen
          name="Textbook"
          component={Textbook}
          options={{
            headerBackTitleVisible: false,
            title: 'TextBooks',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1790EF',
              elevation: 0,
              shadowColor: 'transparent',
            },
            headerBackImage: MyCustomHeaderBackImage,
          }}
        />


        <Stack.Screen
          name="Question"
          component={Question}
          options={{
            headerBackTitleVisible: false,
            title: 'TextBooks',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1790EF',
              elevation: 0,
              shadowColor: 'transparent',
            },
            headerBackImage: MyCustomHeaderBackImage,
          }}
        />


        <Stack.Screen
          name="Timer"
          component={Timer}
          options={{
            headerBackTitleVisible: false,
            title: 'TextBooks',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1790EF',
              elevation: 0,
              shadowColor: 'transparent',
            },
            headerBackImage: MyCustomHeaderBackImage,
          }}
        />


        <Stack.Screen
          name="StudyTips"
          component={StudyTips}
          options={{
            headerBackTitleVisible: false,
            title: 'TextBooks',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1790EF',
              elevation: 0,
              shadowColor: 'transparent',
            },
            headerBackImage: MyCustomHeaderBackImage,
          }}
        />


        <Stack.Screen
          name="Notepad"
          component={NotePadApp}
          options={{
            headerBackTitleVisible: false,
            title: 'TextBooks',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#1790EF',
              elevation: 0,
              shadowColor: 'transparent',
            },
            headerBackImage: MyCustomHeaderBackImage,
          }}
        />


        


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;