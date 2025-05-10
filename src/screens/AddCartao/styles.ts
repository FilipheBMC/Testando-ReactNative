import theme from "@src/styles/theme";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const Title = styled.Text`
    width: 100%;
    font-size: 20px;
    text-align: center;
    margin-top: 50px;
    color: ${theme.COLORS.PURPLEDARK1};
`;

export const Content = styled.ImageBackground`
    width: 240px;
    height: 340px;
    align-items: center;
    justify-content: center;
    margin-top: 55px;
    border-radius: 50px;
    background-color: ${theme.COLORS.PURPLE2};
`;

export const SubTitle = styled.Text`
    text-align: center;
    margin-top: 40px;
    line-height: 20px;
    color: ${theme.COLORS.BLACK};
    font-family: ${theme.FONTS.POPPINSLIGHT};
    font-size: 15px;
`;

export const ContentChip = styled.Image`
    width: 35px;
    height: 40px;
    position: absolute;
    top: 75px;
    left: 50px;
`;