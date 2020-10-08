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
  ErrorMessage,
  CreateButton
} from "./styles";

import { View } from "react-native";

import api from "../../services/api";

const TarefaModal = ({setTarefas, idProjeto}) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [novoUsuario, setNovoUsuario] = useState("");
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const isFocused = useIsFocused();

  const loadTarefas = useCallback(async () => {
    const response = await api.get('tarefas');
    setTarefas(response.data);
    },[]
  );

  const loadUsuario = useCallback(async () => {
    const response = await api.get('usuarios');
    const filtrado = response.data.filter((usuario) => usuario.nome === novoUsuario);
    setListaUsuarios(filtrado);
    
  },[novoUsuario])

  useEffect(() => {
    if (novoUsuario.length > 0) {
    loadTarefas();
    }
  }, [novaTarefa, listaUsuarios]);

  useEffect(() => {
    if (novoUsuario.length > 0) {
      loadUsuario();
    }
  }, [novoUsuario])

  const criarTarefa = useCallback(
  async () => {
    if (novaTarefa === "") {
      setErrorMessage("Digite o nome da tarefa a ser adicionada");
      return;
    }

    const params = {
      descricao: novaTarefa,
      usuarioId: listaUsuarios[0].id,
      projetoId: idProjeto,
      concluido: false,
    };

    try {
      await api.post("tarefas", params);
      loadTarefas();
      setNovaTarefa("");
      setNovoUsuario("");
      setModalVisible(false);
    } catch (error) {
      console.log("erro ao adicionar tarefa!");
      setErrorMessage("Ocorreu um erro ao adicionar uma tarefa");
    }
  },[novaTarefa, listaUsuarios]
);

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Wrap>
        <TextModal>Entre com o nome da Tarefa</TextModal>
          
          <Input
            value={novaTarefa}
            onChangeText={(text) => setNovaTarefa(text)}
            placeholder="Digite o nome da nova Tarefa..."
          />

          <Input
            value={novoUsuario}
            onChangeText={(text) => setNovoUsuario(text)}
            placeholder="Digite o nome do Usuário..."
          />
          
          { !!errorMessage && (
            <ErrorMessage>{errorMessage}</ErrorMessage>
           )}
        
        <Actions>
          <TouchableHighlight onPress={() => criarTarefa()}
            
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
      <CreateButton
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <TextButton>Adicionar tarefa</TextButton>
      </CreateButton>
    </View>
  );
};

export default TarefaModal;
