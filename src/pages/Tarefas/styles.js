import styled from 'styled-components/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Title = styled.Text`
  font-size: 36px;
  color: ${props => props.theme.text};
`;

export const Roll = styled.ScrollView`
  background-color:${props => props.theme.background};
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color:${props => props.theme.background};
`;

export const Header = styled.View`
  flex:1;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  background-color: ${props => props.theme.input};
  padding: 0 20px;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  width: 80px;
  height: 40px;
  background-color: ${props => props.theme.button};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.text};
  font-size: 18px;
  font-weight: bold;
`;


export const ProjetoList = styled.View`
  flex: 1;
  margin-top: 40px;
`;

export const Task = styled.View`
  background-color: ${props => props.theme.backgroundTerciary};
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px 20px;
  justify-content: space-between;
  flex-direction: row;
`;

export const TaskText = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.text};
`;

export const TaskAction = styled.View`
  flex-direction: row;
`;

export const ErroMessage = styled.Text`
  color: #c53030;
  font-size: 14px;
  margin-top: 5px;
`;

export const IconActions = styled(MaterialCommunityIcons)`
  color: ${props => props.theme.text};
`