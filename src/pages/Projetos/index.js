import React, { useState, useEffect, useCallback } from "react";
import { View, ScrollView } from 'react-native';
import api from '../../services/api';
import { useIsFocused} from "@react-navigation/native";
import {
  Container,
  Title,
  Task,
  TaskText,
  TaskAction,
  ProjetoList,
  AddTask,
  AddTaskText,
} from "./styles";

import Accordion from "../../components/Accordion";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProjetoModal from '../../components/ModalAddProjeto';
import TarefaModal from '../../components/ModalAddTarefa';

const Projetos = () => {
  const isFocused = useIsFocused();

  const [projetos, setProjetos] = useState([]);
  const [tarefas, setTarefas] = useState([]);
 
  const loadProjetos = useCallback(async () => {
      const response = await api.get('projetos');
      setProjetos(response.data);
    },[]
  );

  const loadTarefas = useCallback(async () => {
      const response = await api.get('tarefas');
      setTarefas(response.data);
    },[]
  );

  const removerTarefa = (async (id) => {
    await api.delete(`tarefas/${id}`)
    loadTarefas();
  });

  const removerProjeto = (async (id) => {
    await api.delete(`projetos/${id}`)
    loadProjetos();
  })

  useEffect(() => {
    loadProjetos();
    loadTarefas();
  }, [isFocused || false]);
 
  return (
    <ScrollView>
    <Container>
      <Title>Projetos</Title>

      <ProjetoModal setProjetos={setProjetos}/>
      
      <ProjetoList>
        {projetos.map((projeto) => (

            <Accordion title={projeto.descricao} key={projeto.id}>
              <TarefaModal setTarefas={setTarefas} idProjeto={projeto.id}/>
              {tarefas.map((tarefa) =>
                tarefa.projetoId === projeto.id ? (
                  
                  <View key={tarefa.id}>
                    <Task>
                        <TaskText>{tarefa.descricao}</TaskText>
                      <TaskAction>
                      {tarefa.concluido ? (
                        <>
                            <MaterialCommunityIcons
                              name="check-circle-outline"
                              color="#3a3a3a"
                              size={24}
                            />
                            <MaterialCommunityIcons
                              name="delete-outline"
                              color="#3a3a3a"
                              size={24}
                              style={{marginLeft:10}}
                              onPress={() => removerTarefa(tarefa.id)}
                            />
                            </>
                          ) : (
                            <>
                            <MaterialCommunityIcons
                              name="circle-outline"
                              color="#3a3a3a"
                              size={24}
                            />
                            <MaterialCommunityIcons
                              name="delete-outline"
                              color="#3a3a3a"
                              size={24}
                              style={{marginLeft:10}}
                              onPress={() => removerTarefa(tarefa.id)}
                            />
                            </>
                          )}
                      
                      </TaskAction>
                    </Task>
                  </View>
                ) : null
              )}
                <MaterialCommunityIcons
                  name="delete-forever"
                  color="#0071b0"
                  size={32}
                  style={{alignSelf:"flex-end"}}
                  onPress={() => removerProjeto(projeto.id)}
                />
            </Accordion>
          
        ))}
      </ProjetoList>
    </Container>
    </ScrollView>
  );
};
export default Projetos;

