import theme from "@src/styles/theme";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1 ;
    padding: 10px 15px;
`;

export const ViewProfileName = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 2px 15px;
    margin-top: 15px;
`;

export const ViewIcon = styled.View.attrs({
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
})`
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.COLORS.WHITE};
    border-radius: 40px;
`;

export const ViewRight = styled.View`
    flex: 1;
    margin-left: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const PorfileName = styled.Text`
    font-size: 18px;
    justify-content:space-between;
    color: ${theme.COLORS.BLACK};
    font-family: ${theme.FONTS.POPPINSMEDIUM};
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