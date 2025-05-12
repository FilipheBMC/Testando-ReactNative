import theme from "@src/styles/theme";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1 ;
    align-items: center;
    /* padding: 20px; */
`;

export const Title = styled.Text`
    font-size: 20px;
    margin-left: 25px;
    color: ${theme.COLORS.GRAY1};
    font-family: ${theme.FONTS.POPPINSBOLD};
`;

export const BalanceImage = styled.ImageBackground`
    width: 100%;
    height: 215px;
`;

export const AmountValue = styled.Text`
    font-size: 16px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.POPPINSREGULAR};
    position: absolute;
    top: 57.5px;
    left:175px;
`;

export const ViewContent = styled.View`
    padding: 30px;
    align-items: center;
    justify-content: center;
`;

export const TitleAmount = styled.Text`
    font-size: 16px;
    line-height: 20px;
    color: ${theme.COLORS.GRAY3};
    font-family: ${theme.FONTS.POPPINSEXTRABOLD};
`;

export const AmountValorTotal = styled.Text`
    font-size: 32px;
    line-height: 45px;
    color: ${theme.COLORS.PURPLEDARK1};
    font-family: ${theme.FONTS.POPPINSEXTRABOLD};
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
`;

export const ButtonTitleVerTodos = styled.Text`
    font-size: 14px;
    color: ${theme.COLORS.PURPLEDARK2};
    font-family:${theme.FONTS.POPPINSLIGHT};
`;

export const ButtonVerTodos = styled.TouchableOpacity`
    border-width: 1.5px;
    border-radius: 30px;
    padding: 3px;
    border-color: ${theme.COLORS.PURPLE2};
    justify-content: center;
`;

export const ContentFlatHeader = styled.View`
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
`;