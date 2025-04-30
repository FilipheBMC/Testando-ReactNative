import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";
import theme from "@src/styles/theme";

export const Button = styled(RectButton)`
    
    width: ${RFValue(130)}px;
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(5)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 16px;
    background-color: ${theme.COLORS.GRAY5};
    margin-left:${RFValue(10)}px;

`;

export const IconGoogle = styled.Image`
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(17)}px;
    margin-left: ${RFValue(15)}px;
    font-family: ${theme.FONTS.POPPINSLIGHT};
`;