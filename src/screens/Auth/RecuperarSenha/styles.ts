import theme from "@src/styles/theme";
import { Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    padding: 20px;
`;

export const ContentHeader = styled.View`
    width: 100%;
    margin-left: -10px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: 25px;
    margin-top:40px;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

export const Description = styled.Text`
    margin-top: 60px;
    font-size: 20px;
    margin-bottom: 10px;
    font-family: ${theme.FONTS.POPPINSEXTRABOLD};
`;

export const ContentBody = styled.View`
    margin-top: 80;
`;

export const ContentFooter = styled.View`
    align-items: center;
`;

export const ButtonGoBack = styled(Pressable)`
    flex-direction: row;
    margin-top: 10px;
`;

export const Title1 = styled.Text`;
    font-size: ${RFValue(13)}px;
    text-align: center;
    font-family: ${theme.FONTS.POPPINSREGULAR};
`;

export const Title2 = styled.Text`
    font-size: ${RFValue(13)}px;
    text-align: center;
    color: ${theme.COLORS.BLUE};
    font-family: ${theme.FONTS.POPPINSMEDIUM};
    margin-left: 5
`;