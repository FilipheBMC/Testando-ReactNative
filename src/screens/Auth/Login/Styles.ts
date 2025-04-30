import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "@src/styles/theme";
import { Pressable } from "react-native";


export const Container =  styled.View`
    padding: ${RFValue(20)}px;
    
`;

export const ContainerHead = styled.View`
    width: 100%;
    margin-left: -10px;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(25)}px;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
    margin-top: ${RFValue(10)}px;
`;

export const ContentHeader = styled.View`
    align-items: center;
    justify-content: center;
    padding: ${RFValue(20)}px;
`;

export const Description = styled.Text`
    margin-top: ${RFValue(10)}px;
    font-size: ${RFValue(17)}px;
    font-family: ${theme.FONTS.POPPINSLIGHT};
    margin-bottom:${RFValue(25)}px;


    `;

export const ViewButton = styled.View`
    flex-direction: row;
`;

export const ContentBody = styled.View``;

/* Parte para caso queria se logar */

export const ContentFotter = styled.View`
    /* flex: 1;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -45%;
    margin: auto; */
`;

export const ButtonSingUp = styled(Pressable)`
    align-items:center;
    justify-content: center;
    flex-direction: row;
`;

export const TitleButtonSingUp1 = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${theme.COLORS.GRAY3};
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

export const TitleButtonSingUp2 = styled.Text`
    color: ${theme.COLORS.BLUE1};
    margin-left: ${RFValue(5)}px;
    font-size: ${RFValue(14)}px;
    font-family: ${theme.FONTS.POPPINSBOLD};
`;

/* Botão para caso tenha se esquecido da senha */

export const ContentForgotPassWord = styled.View`
    width: 100%;
    /* padding: 20px 0; */
    align-items: flex-end;
    justify-content: flex-end;
`;

export const ContentButtonForgotPassWord = styled(Pressable)`
    align-items: center;
    justify-content: flex-end;
`;

export const ContentTitleForgotPassWord = styled.Text`
    align-items: flex-end;
    font-size: 13px;
    color: ${theme.COLORS.GRAY4};
    font-family: ${theme.FONTS.POPPINSREGULAR};
`;