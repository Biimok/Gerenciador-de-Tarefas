import React, { useState } from "react";
import { Modal } from "react-native";

import {
  View, 
  TextModal,
  TextButton,
  TouchableHighlight,
} from './styles.js';

import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';


const ModalPage = ({ tarefas }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(true);
  const {user} = useAuth();
  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        
          <View >
            <TextModal >{`Bem vindo, ${user.nome}!`}</TextModal>
            <TextModal >Você tem {tarefas.length} tarefas pendentes</TextModal>
            <TextModal >O que deseja fazer hoje?</TextModal>
            <TouchableHighlight
              
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <TextButton>Suas Tarefas</TextButton>
            </TouchableHighlight>
            <TouchableHighlight
              
              onPress={() => {
                navigation.navigate('Projetos');
              }}
            >
              <TextButton>Projetos</TextButton>
            </TouchableHighlight>
          </View>
        
      </Modal>
  );
};


export default ModalPage;
