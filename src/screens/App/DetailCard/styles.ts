import theme from "@src/styles/theme";
import styled from "styled-components/native";

export const Container = styled.View`
    padding: 30px;
`;

export const Title = styled.Text`
    width: 100%;
    font-size: 30px;
    margin-top: 50px;
    text-align: center;
    color: ${theme.COLORS.PURPLE};
`;

export const DetailsCard = styled.Image`
    width: 100%;
    height: 220px;
    margin-top: 50px;
    border-radius:40px;
`;

export const ViewDetails = styled.View`
    width: 100%;
    align-items: center;
    margin-top:40px;
`;

export const ViewInfo = styled.View`
    width: 80%;
    flex-direction: row;
    padding: 5px 0;
`;

export const InfoTitle = styled.Text`
    /* flex: 1; */
    font-size: 16px;
    color: ${theme.COLORS.GRAY4};
`;

export const Name = styled.Text`
    flex: 1;
    font-size: 16px;
    text-align: right;
    color: ${theme.COLORS.GRAY1};
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

export const Banco = styled.Text`
    flex: 1;
    font-size: 16px;
    text-align: right;
    color: ${theme.COLORS.GRAY1};
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

export const Conta = styled.Text`
    flex: 1;
    font-size: 16px;
    text-align: right;
    color: ${theme.COLORS.GRAY1};
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;

export const Status = styled.Text`
    flex: 1;
    font-size: 16px;
    text-align: right;
    color: ${theme.COLORS.GRAY1};
    font-family: ${theme.FONTS.POPPINSMEDIUM}; 
`;

export const Validade = styled.Text`
    flex: 1;
    font-size: 16px;
    text-align: right;
    color: ${theme.COLORS.GRAY1};
    font-family: ${theme.FONTS.POPPINSMEDIUM};
`;