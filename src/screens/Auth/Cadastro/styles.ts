import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    padding: 20px;
`;

export const ContentHeader = styled.View`
    width: 100%;
    margin-left: -7px;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    align-items: center;
    text-align: center;
    font-size: ${RFValue(20)}px;
`;

export const Description = styled.Text`

`;

export const ContentBody = styled.View`

`;