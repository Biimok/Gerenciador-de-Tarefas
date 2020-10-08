import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';


const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    async function loadData() {
      const user = await AsyncStorage.getItem('@TODO:user');
      // console.log("AuthProvider user", user);

      if(user){
        setData({ user: JSON.parse(user) })
      }
    }

    loadData();
  }, [])

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.get('usuarios');
    // console.log("usuarios", response);

    const user = response.data.filter(data => {
      // console.log("data", data.email, email, data.password, password);
      return (data.email === email && data.password === password);
    });

    if(user.length > 0){
      await AsyncStorage.setItem('@TODO:user', JSON.stringify(user[0]));
      setData({ user: user[0] });
    }else{
      throw new Error('Usuário ou senha inválido');
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@TODO:user');

    setData({});
  }, []);

  const updateUser = useCallback(async( params ) => {
    try{
      await api.put(`usuarios/${data.user.id}`, params);
      await AsyncStorage.setItem('@TODO:user', JSON.stringify(params));
      setData({user: params })
     } catch {
      console.log("erro ao atualizar perfil");
     }
  })

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser}}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };