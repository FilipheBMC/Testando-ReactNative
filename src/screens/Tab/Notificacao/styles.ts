import theme from "@src/styles/theme";
import { FlatList } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const Title = styled.Text`

`;

export const ContentTop = styled.View`
    width: 100%;
    height: 40%;
    padding: 30px 10px;
    align-items: center;
`;

export const ContentBody = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    padding: 30px 10px;
`;

export const ContentTopTitle = styled.Text`
    size: 25px;
    font-weight: bold;
    color: ${theme.COLORS.BLACK};
`;

export const ContentBodyTitle = styled.Text`
    size: 25px;
    font-weight: bold;
    color: ${theme.COLORS.BLACK};
`;
export const NewFlatList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`

`;

export const NewNotificationFlat = styled.View`

`;

export const RecentFlatList = styled(FlatList).attrs({
    showsVerticalScrollIndicator: false,
})``;

export const ContentFlat = styled.View`
    width: 100%;
    height: 88px;

    background-color: ${theme.COLORS.WHITE};
`;

export const DataNotifications = styled.View``;

export const DataNotificationText = styled.Text``;

export const TitleNotification = styled.View``;

export const TitleNotificationsText = styled.Text``;

export const DescriptionNotification = styled.View``;

export const DescriptionNotificationText = styled.Text``;
