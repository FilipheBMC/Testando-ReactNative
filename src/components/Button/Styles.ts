import styled from "styled-components/native";
import { Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "@src/styles/theme";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-top: ${RFValue(15)}px;
    border-radius: ${RFValue(8)}px;
    background-color: ${ theme.COLORS.PRIMARY };
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${theme.COLORS.BLACK};
    font-family: ${theme.FONTS.POPPINSMEDIUM};
    font-size: ${RFValue(18)}px;
`;

