import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from '../AppStack/MainStack';
import Notification from '../Common/Notification';
import Semester from '../Category/Semester';
import Portal from '../Category/Portal';
import Syllabus from '../Category/Syllabus';
import University from '../Category/University';
import Library from '../Category/Library';
import Holiday from '../Category/CategoryData/Holiday/Holiday';
import PyqData from '../Category/CategoryData/Pyq/PyqData';
import BeuResult from '../Category/CategoryData/BeuResult/BeuResult';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainStack"
        component={MainStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
        }}
      />
      {/* Category Stack start */}
      <Stack.Screen
        name="Semester"
        component={Semester}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Portal"
        component={Portal}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Syllabus"
        component={Syllabus}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="University"
        component={University}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Library"
        component={Library}
        options={{
          headerShown: false,
        }}
      />

      {/* Category stack end */}

      {/* Holiday data */}
      <Stack.Screen
        name="Holiday"
        component={Holiday}
        options={{
          headerShown: false,
        }}
      />
      {/* Holiday data end */}

      {/* Pyq data */}
      <Stack.Screen
        name="PyqData"
        component={PyqData}
        options={{
          headerShown: false,
        }}
      />

      {/* Pyq data end */}

      {/* Beu Result */}
      <Stack.Screen
        name="BeuResult"
        component={BeuResult}
        options={{
          headerShown: false,
        }}
      />
      {/* Beu Result  end*/}
    </Stack.Navigator>
  );
};

export default AppStack;
