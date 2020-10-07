import React, { useState, useEffect, useCallback } from "react";
import api from "../../services/api";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";
import Accordion from "../../components/Accordion";
import Modal from "../../components/ModalBoasVindas";
import { View, ScrollView } from "react-native";

import {
  Container,
  Title,
  Button,
  ButtonText,
  Task,
  TaskText,
  TaskAction,
  ErroMessage,
  ProjetoList,
} from "./styles";

const Tarefas = () => {
  const isFocused = useIsFocused();
  const { signOut, user } = useAuth();

  const [projetos, setProjetos] = useState([]);
  const [tarefas, setTarefas] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const loadTarefas = useCallback(async () => {
    const response = await api.get(`tarefas`);
    const filtrado = response.data.filter((item) => item.usuarioId === user.id);
    setTarefas(filtrado);
  }, []);
  const loadProjetos = useCallback(async () => {
    const response = await api.get(`projetos`);
    const filtro = [];
    response.data.map((projeto) => {
      let check = false;
      tarefas.map((tarefa) => {
        if (projeto.id === tarefa.projetoId) {
          check = true;
        }
      });
      if (check) {
        filtro.push(projeto);
      }
    });
    setProjetos(filtro);
  }, [tarefas]);

  useEffect(() => {
    loadTarefas();
  }, [isFocused || false]);

  useEffect(() => {
    // if (tarefas.length > 0) {
      loadProjetos();
    // }
  }, [tarefas]);

  const attTarefa = useCallback(
    async (tarefa) => {
      const params = {
        ...tarefa,
        concluido: !tarefa.concluido,
      };

      await api.put(`tarefas/${tarefa.id}`, params);

      loadTarefas();
    },
    []
  );

  return (
    <>
      <ScrollView>
        <Modal tarefas={tarefas}/>
        <Container>
          <Title>{`${user.nome}, suas Tarefas`}</Title>

          <Button onPress={signOut}>
            <ButtonText>Sair</ButtonText>
          </Button>

          {!!errorMessage && <ErroMessage>{errorMessage}</ErroMessage>}

          <ProjetoList>
            {projetos.map((projeto) => (
              <Accordion title={projeto.descricao} key={projeto.id}>
                {tarefas.map((tarefa) =>
                  tarefa.projetoId === projeto.id ? (
                    <View key={tarefa.id}>
                      <Task>
                        <TaskText>{tarefa.descricao}</TaskText>

                        <TaskAction>
                          {tarefa.concluido ? (
                            <MaterialCommunityIcons
                              name="check-circle-outline"
                              color="#3a3a3a"
                              size={22}
                              onPress={() => attTarefa(tarefa)}
                            />
                          ) : (
                            <MaterialCommunityIcons
                              name="circle-outline"
                              color="#3a3a3a"
                              size={22}
                              onPress={() => attTarefa(tarefa)}
                            />
                          )}
                        </TaskAction>
                      </Task>
                    </View>
                  ) : null
                )}
              </Accordion>
            ))}
          </ProjetoList>
        </Container>
      </ScrollView>
    </>
  );
};

export default Tarefas;
