import React, { useState} from "react";

import { Modal } from "react-native";
import { useAuth } from '../../hooks/auth';


import {
  Wrap,
  TextModal,
  TextButton,
  TouchableHighlight,
  Input,
  Actions,
  ErrorMessage,
  CreateButton
} from "./styles";

import { View } from "react-native";

const TarefaModal = () => {
  const { user, updateUser } = useAuth();

  const [modalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
 const atualizar = () => {
  if (nome === "" || senha === "" || email === "") {
    setErrorMessage("Preencha todos os campos");
    return;
  }

  const params = {
    nome: nome,
    email: email,
    password: senha,
    id: user.id,
    admim: user.admim,
    theme: user.theme
  }

  updateUser(params);
  setNome('');
  setEmail('');
  setSenha('');
}

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Wrap>
        <TextModal>Atualize suas Informações</TextModal>
          
          <Input
            value={nome}
            onChangeText={(text) => setNome(text)}
            placeholder="Digite o nome..."
          />

          <Input
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Digite o email..."
          />

          <Input
            value={senha}
            onChangeText={(text) => setSenha(text)}
            placeholder="Digite a senha..."
          />
          
          { !!errorMessage && (
            <ErrorMessage>{errorMessage}</ErrorMessage>
           )}
        
        <Actions>
          <TouchableHighlight
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <TextButton>Cancelar</TextButton>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={() => {
              atualizar();
              setModalVisible(false);
            }}>
            <TextButton>Atualizar</TextButton>
          </TouchableHighlight>
        </Actions>
        </Wrap>
      </Modal>
      <CreateButton
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <TextButton>Alterar Perfil</TextButton>
      </CreateButton>
    </View>
  );
};

export default TarefaModal;
