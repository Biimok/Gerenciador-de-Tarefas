import styled from 'styled-components/native';

export const Title = styled.Text`

font-size: 36px;
  color: #3a3a3a;
    
`;

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const ProjetoList = styled.View`
  flex: 1;
  margin-top: 40px;
`;

export const Task = styled.View`
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px 20px;
  justify-content: space-between;
  flex-direction: row;
`;

export const AddTask = styled.View`
  background-color: #0071b0;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px 20px;
  flex-direction: row;
`;

export const TaskText = styled.Text`
  font-size: 18px;
  color: #3a3a3a;
`;

export const AddTaskText = styled.Text`
  font-size: 18px;
  color: white;
`;

export const TaskAction = styled.View`
  flex-direction: row;
`;



export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  background-color: #fff;
  padding: 0 20px;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  background-color: #0071b0;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const FormAddNewProjeto = styled.View`
  flex-direction: row;
  margin-top: 30px;
`;

// cor primária 1 = #419fe3
// cor primária 2 = #7cd0ff
// cor primária 3 = #0071b0
// cor do Texto = #000

//  cor secundária 1 = #745be2
//  cor secundária 2 = #a989ff
//  cor secundária 3 = #3c30af
// cor do Texto = #fff