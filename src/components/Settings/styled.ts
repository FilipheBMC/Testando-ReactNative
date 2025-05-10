import styled from "styled-components/native";
import theme from "@src/styles/theme";

export const Container = styled.View``;

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

