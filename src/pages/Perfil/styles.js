import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color:${props => props.theme.background};
`;

export const TextContainer = styled.View`
  border-radius: 5px;
`;

export const Actions = styled.View`
  flex-direction:row;
`;

export const Button = styled.TouchableOpacity`
  min-width: 100px;
  height: 40px;
  margin: 20px;
  padding:15px;
  background-color: ${props => props.theme.button};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.buttonText};
  font-size: 18px;
  font-weight: bold;
`;

export const TextPerfil = styled.Text`
  color:${props => props.theme.text};
  margin:7px;
  text-align:center;
  font-size:18px;
`


// cor primária 1 = #419fe3
// cor primária 2 = #7cd0ff
// cor primária 3 = #0071b0 => Botões
// cor do Texto = #fff

//  cor secundária 1 = #745be2
//  cor secundária 2 = #a989ff 
//  cor secundária 3 = #3c30af
// cor do Texto = #fff


