import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Tarefas from '../pages/Tarefas';
import Projetos from '../pages/Projetos';

const Tab = createMaterialBottomTabNavigator();



const AppRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Tarefas"
    >
      <Tab.Screen 
        name="Tarefas" 
        component={Tarefas} 
        options={{
          tabBarLabel:'Tarefas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-dashboard" color="#000" size={30} />
          ),
        }}
      />
      <Tab.Screen 
        name="Projetos" 
        component={Projetos} 
        options={{
          tabBarLabel:'Projetos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="playlist-edit" color="#000" size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default AppRoutes;