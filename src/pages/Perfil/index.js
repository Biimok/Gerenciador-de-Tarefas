import React, { useCallback, useEffect, useState } from 'react';
import { Image, Switch, View } from 'react-native';

import { Container, Button, ButtonText, TextPerfil, Actions, TextContainer } from './styles';
import logoImg from '../../assets/LogoTodo.png';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';
import Modal from '../../components/ModalConfigPerfil';

const Perfil = () => {

  const { user, updateUser } = useAuth();
  const navigation  = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [cor, setCor] = useState(user.theme);
  const toggleSwitch = () => {
    if (cor === "DarkTheme") {
      setCor("DefaultTheme")
    } else {
      setCor("DarkTheme")
    }
  };
  const checarTema = () => {
    if (cor === "DarkTheme") {
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  }

  useEffect(() => {
    atualizar();
    checarTema();
  }, [cor])
  
  const atualizar = useCallback(() => {
      
    const params = {
      nome: user.nome,
      email: user.email,
      password: user.password,
      id: user.id,
      admim: user.admim,
      theme: cor

    }
  
    updateUser(params);
  }, [cor]) ;

  return (
    <Container>
      <Image source={logoImg} style={{marginBottom:50}}/>
      <TextContainer>
        <TextPerfil>
          Nome: {user.nome}
        </TextPerfil>

        <TextPerfil>
          Email: {user.email}
        </TextPerfil>

        <TextPerfil>
          Função: {
              user.admim ? (
                "Administrador"
              ) : (
                "Usuário"
              )
            }
        </TextPerfil>
        <View >
          <Switch
            trackColor={{ false: "#3c3c3c", true: "#fff" }}
            thumbColor={isEnabled ? "#3c30af" : "#0071b0"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </TextContainer>
      <Actions>      
        <Button onPress={() => navigation.navigate('Tarefas')} >
      
            <ButtonText>Voltar</ButtonText>
      
        </Button>
        <Modal/>
      </Actions>
    </Container>
  )
}

export default Perfil;