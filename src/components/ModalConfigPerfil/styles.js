import styled from 'styled-components';




export const Wrap = styled.View`
    flex:1;
    background-color: ${props => props.theme.background};
    padding: 35px;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    font-size: 18px;
    color: white;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.buttonText};

`;
export const TextModal = styled.Text`
    font-size: 26px;
    text-align: center;
    color: ${props => props.theme.text};
`;  

export const TouchableHighlight = styled.TouchableHighlight`
    background-color: ${props => props.theme.button};
    border-radius: 5px;
    padding: 10px;
    min-width:100px;
    margin: 20px;
`;

export const CreateButton = styled.TouchableHighlight`
  min-width: 100px;
  height: 40px;
  margin: 20px;
  padding:15px;
  background-color: ${props => props.theme.button};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  height: 50px;
  width:330px;
  background-color: ${props => props.theme.input};
  padding: 0 20px;
  border-radius: 5px;
  margin: 20px 0 10px 0;
  font-size:20px;
`;

export const Actions = styled.View`
  flex-direction:row;
`;

export const ErrorMessage = styled.Text`
  color: #c53030;
  font-size: 14px;
  margin-top: 5px;
`;