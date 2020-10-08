import styled from 'styled-components/native';
import Icon from '@expo/vector-icons/MaterialIcons';

export const Seta = styled.TouchableOpacity`
flex-direction: row;
justify-content: space-between;
height:56px;
padding-left:25px;
padding-right:18px;
align-items:center;
background-color: ${props => props.theme.backgroundSecundary};

`;

export const Title = styled.Text`
  font-size:20px;
  font-weight:bold;
  color:${props => props.theme.text};
`;

export const Parent = styled.View`
  height:1px;
  width:100%;
`;

export const Desc = styled.View`
  background-color:${props => props.theme.backgroundTerciary};
  padding:16px;
`;

export const Icone = styled(Icon)`
  color:${props => props.theme.text};
`;


