import theme from "@src/styles/theme";
import { Pressable } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex:1 ;
`;

export const ContentFlat = styled.View`
    display: 1;
    margin-left:-10px;
    padding: 10px 20px;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContentFlatHeader = styled.View`
    padding: 10px;
    flex-direction: row;
    /* align-items: center; */
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
`;

export const Title = styled.Text`
  font-size: 20px;
  /* margin-left: 25px; */
  color: ${theme.COLORS.GRAY1};
  font-family: ${theme.FONTS.POPPINSBOLD};
`;

export const ButtonGoBack = styled(Pressable)`
    position: absolute;
    bottom: 20px;
    right: 30px;
    padding: 10px;
    border-radius: 30px;
    background-color: ${theme.COLORS.GRAY4};
`;