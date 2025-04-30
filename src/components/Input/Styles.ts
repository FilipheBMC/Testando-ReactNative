import theme from "@src/styles/theme";
import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 60px;
    padding: 0 12px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: ${theme.COLORS.GRAY5};
    margin-top:10px;
`;

export const InputContainer = styled.TextInput`
    /* width: 100%; */
    flex: 1;
    height: 60px;
    border: 0;
    border-radius: 8px;
    font-size: 14px;
    font-family: ${theme.FONTS.POPPINSLIGHT};

`;