import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme, DarkTheme } from '../components/Theme/Theme';
import { useAuth } from '../hooks/auth';

import Tarefas from '../pages/Tarefas';
import Projetos from '../pages/Projetos';
import Perfil from '../pages/Perfil';

const Tab = createMaterialBottomTabNavigator();
// const StackTarefas = createStackNavigator();
// const StackProjetos = createStackNavigator();
const Stack = createStackNavigator();

const HomeTabs = () => {
  const { user } = useAuth();
  return (
    <Tab.Navigator
      initialRouteName="Tarefas"
      activeColor="#f0edf6"
      inactiveColor="#aaa"
      barStyle={{ backgroundColor: user.theme === "DarkTheme" ? "#3c30af" : "#0071b0" }}
      
    >
      <Tab.Screen 
            name="Tarefas"
            component={Tarefas}
            options={{
              tabBarLabel:'Tarefas',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="view-dashboard" color="#fff" size={30} />
              ),
            }}
          />
          <Tab.Screen 
            name="Projetos" 
            component={Projetos} 
            options={{
              tabBarLabel:'Projetos',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="playlist-edit" color="#fff" size={30} />
              ),
            }}
          />
    </Tab.Navigator>
  )
}

const AppRoutes = () => {
    const { user } = useAuth();
    return (
      <ThemeProvider theme={() => 
        {if (user) {
          if (user.theme === "DarkTheme") {
            return DarkTheme
          }
          return DefaultTheme
        } else {
          console.log(user);
          return DefaultTheme
        }}
      }>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="Perfil" component={Perfil} />
        </Stack.Navigator>
      </ThemeProvider>
    )
  }

export default AppRoutes;



// const TarefasRoutes = () => {
//   return (
//     <StackTarefas.Navigator 
//       initialRouteName="Tarefas" 
//       screenOptions={{
//         headerShown: false
//       }}
//     >
//       <StackTarefas.Screen name="Tarefas" component={Tarefas}/>
//       <StackTarefas.Screen name="Perfil" component={Perfil}/>
//     </StackTarefas.Navigator>
//   )
// }

// const ProjetosRoutes = () => {
//   return (
//     <StackProjetos.Navigator 
//       initialRouteName="Projetos"
//       screenOptions={{
//         headerShown: false
//       }}
//     >
//       <StackProjetos.Screen name="Projetos" component={Projetos}/>
//       <StackProjetos.Screen 
//         name="Perfil" 
//         component={Perfil}
//       />
//     </StackProjetos.Navigator>
//   )
// }

// const AppRoutes = () => {
//   return (
//     <>
//       <Tab.Navigator
//         initialRouteName="TarefasRoutes"
//       >
        
//         <Tab.Screen 
//           name="TarefasRoutes"
//           component={TarefasRoutes} 
//           options={{
//             tabBarLabel:'Tarefas',
//             tabBarIcon: ({ color }) => (
//               <MaterialCommunityIcons name="view-dashboard" color="#000" size={30} />
//             ),
//           }}
//         />
//         <Tab.Screen 
//           name="Projetos" 
//           component={ProjetosRoutes} 
//           options={{
//             tabBarLabel:'Projetos',
//             tabBarIcon: ({ color }) => (
//               <MaterialCommunityIcons name="playlist-edit" color="#000" size={30} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </>
//   )
// }