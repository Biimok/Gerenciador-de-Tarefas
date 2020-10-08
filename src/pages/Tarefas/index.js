import React, { useState, useEffect, useCallback } from "react";
import api from "../../services/api";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";
import Accordion from "../../components/Accordion";
import ModalBoasVindas from "../../components/ModalBoasVindas";
import ModalConfig from "../../components/ModalConfig";
import { View } from "react-native";

import {
  Container,
  Title,
  Task,
  TaskText,
  TaskAction,
  ErroMessage,
  ProjetoList,
  Header,
  Roll,
  IconActions
} from "./styles";

const Tarefas = () => {
  const isFocused = useIsFocused();
  const { user } = useAuth();

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
      <Roll>
        
        <ModalBoasVindas tarefas={tarefas}/>
        
        <Container>
          <View style={{flexDirection:"row"}}>
            <Header>
              <Title>{`${user.nome}, suas Tarefas`}</Title>
            </Header>
            <ModalConfig/>
          </View>
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
                            <IconActions
                              name="check-circle-outline"
                              size={22}
                              onPress={() => attTarefa(tarefa)}
                            />
                          ) : (
                            <IconActions
                              name="circle-outline"
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
      </Roll>
    </>
  );
};

export default Tarefas;
