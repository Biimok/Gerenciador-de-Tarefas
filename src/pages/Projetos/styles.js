import styled from 'styled-components/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Title = styled.Text`

font-size: 36px;
  color: ${props => props.theme.text};
    
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${props => props.theme.background};
`;

export const ProjetoList = styled.View`
  flex: 1;
  margin-top: 40px;
`;

export const Task = styled.View`
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px 20px;
  justify-content: space-between;
  flex-direction: row;
`;

export const AddTask = styled.View`
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px 20px;
  flex-direction: row;
`;

export const TaskText = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.text};
`;


export const TaskAction = styled.View`
  flex-direction: row;
`;

export const IconActions = styled(MaterialCommunityIcons)`
  color: ${props => props.theme.text};
`;

export const IconActionsProject = styled(MaterialCommunityIcons)`
  color: ${props => props.theme.button};
`;

export const Roll = styled.ScrollView`
  background-color: ${props => props.theme.background};
`;



// cor primária 1 = #419fe3
// cor primária 2 = #7cd0ff
// cor primária 3 = #0071b0
// cor do Texto = #000

//  cor secundária 1 = #745be2
//  cor secundária 2 = #a989ff
//  cor secundária 3 = #3c30af
// cor do Texto = #fff