import theme from "@src/styles/theme";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    
`;

export const Content = styled.View`
    width:100%;
    height:160px;
    flex-direction: row;
    padding: 20px;
    align-items: center;
    justify-content: space-around;
    background-color: ${theme.COLORS.PURPLE};
    border-radius: 40px;
`;

export const ViewContainer = styled.View`
    padding: 0 20px;
    justify-content: center;
    align-items: center;
`;

export const ViewBalanceLeft = styled.View``;

export const ViewBalanceRight = styled.View``;

export const TitleValue = styled.Text`
    font-size: 16px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.POPPINSREGULAR};
`;
export const TitleValorConta = styled.Text`
    font-size: 19px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

export const TitleCartao = styled.Text``;

export const TitleNomeCartao = styled.Text``;
