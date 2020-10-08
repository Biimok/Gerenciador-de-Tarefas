import React, { useState, useEffect, useCallback } from "react";
import { View } from 'react-native';
import api from '../../services/api';
import { useIsFocused} from "@react-navigation/native";
import {
  Container,
  Title,
  Task,
  TaskText,
  TaskAction,
  ProjetoList,
  IconActions,
  IconActionsProject,
  Roll
} from "./styles";

import Accordion from "../../components/Accordion";

import ProjetoModal from '../../components/ModalAddProjeto';
import TarefaModal from '../../components/ModalAddTarefa';
import { useAuth } from '../../hooks/auth';

const Projetos = () => {
  const isFocused = useIsFocused();
  const { user } = useAuth();

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
    <Roll>
    <Container>
      <Title>Projetos</Title>
      {user.admim ? (
        <ProjetoModal setProjetos={setProjetos}/>
      ):(
        null
      )}
      
      <ProjetoList>
        {projetos.map((projeto) => (
            <Accordion title={projeto.descricao} key={projeto.id}>
            {user.admim ? (
              <TarefaModal setTarefas={setTarefas} idProjeto={projeto.id}/>
            ):(
              null
            )}
              {tarefas.map((tarefa) =>
                tarefa.projetoId === projeto.id ? (
                  
                  <View key={tarefa.id}>
                    <Task>
                        <TaskText>{tarefa.descricao}</TaskText>
                      <TaskAction>
                      {tarefa.concluido ? (
                        <>
                          <IconActions
                            name="check-circle-outline"
                            color="#3a3a3a"
                            size={24}
                          />
                          {user.admim ? (
                            <IconActions
                            name="delete-outline"
                            color="#3a3a3a"
                            size={24}
                            style={{marginLeft:10}}
                            onPress={() => removerTarefa(tarefa.id)}
                            />
                          ) : (  
                            null
                          )}
                          </>
                          ) : (
                          <>
                            <IconActions
                              name="circle-outline"
                              size={24}
                            />
                            {user.admim ? (
                              <IconActions
                              name="delete-outline"
                              size={24}
                              style={{marginLeft:10}}
                              onPress={() => removerTarefa(tarefa.id)}
                              />
                            ) : (  
                               null
                            )}
                          </>
                          )}
                      </TaskAction>
                    </Task>
                  </View>
                ) : null
              )}
                {user.admim ? (
                  <IconActionsProject
                  name="delete-forever"
                  size={32}
                  style={{alignSelf:"flex-end"}}
                  onPress={() => removerProjeto(projeto.id)}
                  />
                ) : (
                  null
                )}
            </Accordion>
        ))}
      </ProjetoList>
    </Container>
    </Roll>
  );
};
export default Projetos;

