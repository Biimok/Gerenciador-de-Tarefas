import React from 'react';
import { Image } from 'react-native';

import { Container, Input, Button, ButtonText, TextPerfil, Actions, TextContainer } from './styles';
import logoImg from '../../assets/LogoTodo.png';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';
import Modal from '../../components/ModalConfigPerfil';

const Perfil = () => {

  const { user } = useAuth();
  const navigation  = useNavigation();
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