import theme from "@src/styles/theme";
import { Pressable } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
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
    font-family: ${theme.FONTS.POPPINSBOLD};
`;

export const TitleCartao = styled.Text`
    font-size: 16px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.POPPINSREGULAR};
`;

export const TitleNomeCartao = styled.Text`
    font-size: 16px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.POPPINSBOLD};
`;

export const Body = styled.View`
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;

`;

// Icones

export const IconTransfer = styled.Image`
    width: 70px;
    height: 70px;
`;

export const IconPayment = styled.Image`
    width: 70px;
    height: 70px;
`;

export const IconTapOut = styled.Image`
    width: 70px;
    height: 70px;
`;

export const IconPayOut = styled.Image`
    width: 70px;
    height: 70px;
`;

export const TitleTransfer = styled.Text`
    font-size: 11px;
    color: ${theme.COLORS.PURPLE};
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

export const TitlePayment = styled.Text`
    font-size: 11px;
    color: ${theme.COLORS.PURPLE};
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

export const TitleTapOut = styled.Text`
    font-size: 11px;
    color: ${theme.COLORS.PURPLE};
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

export const TitlePayOut = styled.Text`
    font-size: 11px;
    color: ${theme.COLORS.PURPLE};
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

export const Footer = styled.View`
    flex: 1;
    width: 100%;
`;

export const ContentFlat = styled.View`
    display: 1;
    padding: 20px;
`;

export const ContentFlatHeader = styled.View`
    flex-direction: row;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonVerTodos = styled.TouchableOpacity`
    border-width: 2px;
    border-radius: 30px;
    padding: 5px;
    border-color: ${theme.COLORS.PURPLE2};
`;

export const ButtonTitleVerTodos = styled.Text`

`;

export const IconTransaction = styled.Image`

`;

export const DetailsTransaction = styled.View`

`;

export const NameTransaction = styled.Text`

`;

export const SubTitleTransaction = styled.Text`

`;

export const PriceTransaction = styled.Text`

`
;

export const Title = styled.Text`
  font-size: 20px;
  color: ${theme.COLORS.GRAY1};
  font-family: ${theme.FONTS.POPPINSBOLD};
`;