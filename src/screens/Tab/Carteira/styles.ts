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
    background-color: ${theme.COLORS.PURPLEDARK3};
    border-radius: 40px;
`;

export const ViewContainer = styled.View`
    padding: 0 20px;
    justify-content: center;
    align-items: center;
`;

export const ViewBalanceLeft = styled.View``;

export const ViewBalanceRight = styled.View`
    z-index: 1;
`;

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
`;

export const ContentFlat = styled.View`
    display: 1;
    padding: 5px 20px;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContentFlatHeader = styled.View`
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

export const ButtonVerTodos = styled.TouchableOpacity`
    border-width: 1.5px;
    border-radius: 30px;
    padding: 3px;
    border-color: ${theme.COLORS.PURPLE2};
    justify-content: center;
`;

export const ButtonTitleVerTodos = styled.Text`
    font-size: 14px;
    color: ${theme.COLORS.PURPLEDARK2};
    font-family:${theme.FONTS.POPPINSLIGHT};
`;

export const IconTransaction = styled.Image`
    width: 60px;
    height: 60px;
`;

export const DetailsTransaction = styled.View`
    flex: auto;
`;

export const NameTransaction = styled.Text`
    font-size: 16px;
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

export const SubTitleTransaction = styled.Text`
    font-size: 14px;
    font-family:${theme.FONTS.POPPINSREGULAR};
    color: ${theme.COLORS.GRAY3};
`;

export const PriceTransaction = styled.Text`
    font-size: 20px;
    font-family: ${theme.FONTS.POPPINSBOLD};
`
    ;

export const Title = styled.Text`
  font-size: 20px;
  margin-left: 25px;
  color: ${theme.COLORS.GRAY1};
  font-family: ${theme.FONTS.POPPINSBOLD};
`;

export const EllipseOne = styled.Image`
    position: absolute;
    top: 1px;
    left: 40px;
`;

export const EllipseTwo = styled.Image`
    bottom: 0;
    right: 0px;
    position: absolute;
`;