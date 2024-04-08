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
import PyqData from '../Category/CategoryData/Pyq/PyqData';
import PyqData_Sem from '../Category/CategoryData/Pyq/PyqData_Sem';
import BeuResult from '../Category/CategoryData/BeuResult/BeuResult';
import Holiday from '../Category/CategoryData/Holiday/Holiday';
import PyqData_sub from '../Category/CategoryData/Pyq/PyqData_sub';
import PyqData_year from '../Category/CategoryData/Pyq/PyqData_year';
import ViewPyq from '../Category/CategoryData/Pyq/ViewPyq';
import Btech from '../Category/Syllabus/Btech/Btech';
import BtechSem from '../Category/Syllabus/Btech/BtechSem';
import BtechSub from '../Category/Syllabus/Btech/BtechSub';
import BtechModule from '../Category/Syllabus/Btech/BtechModule';
import ModuleData from '../Category/Syllabus/Btech/ModuleData';
import UniversityData from '../Category/University/UniversityData';
import Intern from '../Category/Portal/Intern';
import NatLibrary from '../Category/Portal/NatLibrary';
import Nptel from '../Category/Portal/Nptel';
import Pms from '../Category/Portal/Pms';
import Schlorship from '../Category/Portal/Schlorship';
import Spoken from '../Category/Portal/Spoken';

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
      <Stack.Screen
        name="PyqData_Sem"
        component={PyqData_Sem}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PyqData_sub"
        component={PyqData_sub}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PyqData_year"
        component={PyqData_year}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ViewPyq"
        component={ViewPyq}
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

      {/* Btech data */}

      <Stack.Screen
        name="Btech"
        component={Btech}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BtechSem"
        component={BtechSem}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BtechSub"
        component={BtechSub}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BtechModule"
        component={BtechModule}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ModuleData"
        component={ModuleData}
        options={{
          headerShown: false,
        }}
      />

      {/* Btech Data End */}


      {/* University Data */}

      <Stack.Screen
        name="UniversityData"
        component={UniversityData}
        options={{
          headerShown: false,
        }}
      />

      {/* University Data End */}

      {/* Portal Data */}
      <Stack.Screen
        name="Intern"
        component={Intern}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NatLibrary"
        component={NatLibrary}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Nptel"
        component={Nptel}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Pms"
        component={Pms}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Schlorship"
        component={Schlorship}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Spoken"
        component={Spoken}
        options={{
          headerShown: false,
        }}
      />


      {/* Portal Data End */}
    </Stack.Navigator>
  );
};

export default AppStack;
