import React, { useEffect, useState, useCallback } from "react";

import { Modal } from "react-native";
import { useIsFocused } from "@react-navigation/native";


import {
  Wrap,
  TextModal,
  TextButton,
  TouchableHighlight,
  Input,
  Actions,
  ErrorMessage
} from "./styles";

import { View } from "react-native";

import api from "../../services/api.js";

const ProjetoModal = ({setProjetos}) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [novoProjeto, setNovoProjeto] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isFocused = useIsFocused();

  const loadProjetos = useCallback(async () => {
    const response = await api.get('projetos');
    setProjetos(response.data);
    },[]
  );

  useEffect(() => {
    loadProjetos();
  }, [loadProjetos, isFocused || false]);

  const criarProjeto = useCallback(
  async () => {
    if (novoProjeto === "") {
      setErrorMessage("Digite o nome do Projeto a ser adicionado");
      return;
    }

    const params = {
      descricao: novoProjeto,
    };

    try {
      await api.post("projetos", params);
      loadProjetos();
      setNovoProjeto("");
      setModalVisible(false);
    } catch (error) {
      console.log("erro ao adicionar projeto!");
      setErrorMessage("Ocorreu um erro ao adicionar um projeto");
    }
  },[loadProjetos, novoProjeto]
);

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Wrap>
        <TextModal>Entre com o nome do projeto</TextModal>
          
          <Input
            value={novoProjeto}
            onChangeText={(text) => setNovoProjeto(text)}
            placeholder="Digite o nome do novo Projeto..."
          />
          
          { !!errorMessage && (
            <ErrorMessage>{errorMessage}</ErrorMessage>
           )}
        
        <Actions>
          <TouchableHighlight onPress={() => criarProjeto()}
            
          >
            <TextButton>Criar</TextButton>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <TextButton>Cancelar</TextButton>
          </TouchableHighlight>
        </Actions>
        </Wrap>
      </Modal>
      <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <TextButton>Criar Projeto</TextButton>
      </TouchableHighlight>
    </View>
  );
};

export default ProjetoModal;
