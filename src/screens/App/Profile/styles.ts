import theme from "@src/styles/theme";
import { Pressable } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    padding: 20px;
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    margin-top: 20px;
`;

export const Footer = styled.View`
    margin-top: 10px;
`;

export const Avatar = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 45px;
`;

export const ViewHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const HeaderName = styled.Text`
    font-size: 20px;
    color: ${theme.COLORS.GRAY2};
    font-family: ${theme.FONTS.POPPINSLIGHT};
`;

export const IconButton = styled.TouchableOpacity`

`;

export const ViewFooter = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    /* background-color: ${theme.COLORS.ATTENTION}; */
`;

export const TitleFooter = styled.Text`
    font-size: 17px;
    color: ${theme.COLORS.PURPLE};
    font-family: ${theme.FONTS.POPPINSMEDIUM};
    margin-top: 10px;
`;

export const ViewIconButton = styled.View`
    padding: 5px;
    border-radius: 30px;
    border-width: 1px;
    border-color: ${theme.COLORS.GRAY5};
`;