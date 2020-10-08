import styled from 'styled-components';

export const View = styled.View`
    flex:1;
    background-color: ${props => props.theme.background};
    padding: 35px;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    font-size: 18px;
    color: ${props => props.theme.buttonText};
    font-weight: bold;
    text-align: center;

`;
export const TextModal = styled.Text`
    font-size: 20px;
    text-align: center;
    color: ${props => props.theme.text};
`;  

export const TouchableHighlight = styled.TouchableHighlight`
    background-color: ${props => props.theme.button};
    border-radius: 5px;
    margin-top:20px;
    padding: 10px;
    min-width:180px;
`;