import theme from "@src/styles/theme";
import { Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    padding: 20px;
`;

export const ContentHeader = styled.View`
    width: 100%;
    margin-left: -7px;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(20)}px;
    margin-top: ${RFValue(45)}px;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

export const Description = styled.Text`
    margin-top: ${RFValue(60)}px;
    font-size: ${RFValue(20)}px;
    margin-bottom: ${RFValue(15)}px;
    font-family: ${theme.FONTS.POPPINSBOLD};
`;

export const ContentBody = styled.View`
    margin-bottom: 20px;
`;

export const ContentFooter = styled.View`
    margin-top: 30px;
    align-items: center;
    justify-content: center;
`;

export const ButtonFooter = styled(Pressable)`
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const Title1 = styled.Text`
    font-size: 18px;
    color: ${theme.COLORS.GRAY3};
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

export const Title2 = styled.Text`
    margin-left: 5px;
    font-size: 18px;
    color: ${theme.COLORS.BLUE1};
    font-family: ${theme.FONTS.POPPINSEXTRABOLD};
`;