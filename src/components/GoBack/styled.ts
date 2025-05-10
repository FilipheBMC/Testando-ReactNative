import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    padding: 20px;
    margin-top: ${Platform.OS === "ios" ? 0 : 35}px;
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
`;