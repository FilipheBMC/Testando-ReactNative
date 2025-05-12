import theme from "@src/styles/theme";
import { Platform, Pressable } from "react-native"
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-top: ${Platform.OS === "ios" ? 0 : 35}px;
`;

export const Title = styled.Text`

`;

export const ContentHeader = styled.View`
    /* width: 100%; */
    flex: 1;
    padding:10px;
    justify-content: center;
    margin-left: 15px;
`;

export const Avatar = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
`;

export const AppName = styled.Text`
    font-size: 20px;
    color: ${theme.COLORS.GRAY1};
    font-family: ${theme.FONTS.POPPINSBOLD};
`;

export const Status = styled.Text`
    font-size:15px;
    color: ${theme.COLORS.GRAY4};
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

export const IconButton = styled(Pressable)`
    width: 40px;
    height: 40px;
`;