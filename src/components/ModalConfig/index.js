import React, { useState } from "react";
import { Modal, View } from "react-native";
import MaterialCommunityIcon from '@expo/vector-icons/MaterialCommunityIcons';

import {
  Wrap,
  Header,
  TextButton,
  TouchableHighlight,
  Buttons,
  IconActions
} from './styles.js';

import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';


const ModalConfig = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const { signOut } = useAuth();
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >  
          <Wrap >
            <Header>
              <IconActions
              name="close"
              size={40}
                
                onPress={() => {
                  setModalVisible(false);
                }}
              >
              </IconActions>
            </Header>
            <Buttons>
              <TouchableHighlight
                
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('Perfil');
                }}
              >
                <TextButton>Perfil</TextButton>
              </TouchableHighlight>
              <TouchableHighlight
                
                onPress={signOut}
              >
                <TextButton>Logout</TextButton>
              </TouchableHighlight>
            </Buttons>
          </Wrap>     
      </Modal>
      <IconActions
        name="settings-outline"
        size={35}
        onPress={() => {
          setModalVisible(true);
        }}
      >
      </IconActions>
    </View>
  );
};


export default ModalConfig;
