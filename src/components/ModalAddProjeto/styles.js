import styled from 'styled-components';

export const Wrap = styled.View`
    flex:1;
    background-color: white;
    padding: 35px;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    font-size: 18px;
    color: white;
    font-weight: bold;
    text-align: center;

`;
export const TextModal = styled.Text`
    font-size: 26px;
    text-align: center;
`;  

export const TouchableHighlight = styled.TouchableHighlight`
    background-color: #0071b0;
    border-radius: 5px;
    padding: 10px;
    min-width:100px;
    margin:20px;
`;

export const Input = styled.TextInput`
  height: 50px;
  background-color: #fff;
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