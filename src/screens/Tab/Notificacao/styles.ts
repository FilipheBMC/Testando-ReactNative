import theme from "@src/styles/theme";
import { FlatList } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const Title = styled.Text`

`;

export const ContentHeader = styled.View`
    width: 100%;
    height: 35%;
    padding: 5px 10px;
    align-items: center;
`;

export const ContentBody = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    padding: 0px 10px;
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
    width: 85%;
    height: 88px;
    padding: 10px;
`;

export const RecentFlatList = styled(FlatList).attrs({
    showsVerticalScrollIndicator: false,
})``;

export const ContentFlat = styled.View`
    margin-top: 10px;
    border-radius: 17px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.COLORS.WHITE};
`;

export const DataNotifications = styled.View``;

export const DataNotificationText = styled.Text`
    font-size: 12px;
    color: ${theme.COLORS.GRAY4};
`;

export const TitleNotification = styled.View``;

export const TitleNotificationsText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${theme.COLORS.BLACK};
`;

export const DescriptionNotification = styled.View``;

export const DescriptionNotificationText = styled.Text`
    font-size: 12px;
    color: ${theme.COLORS.GRAY4};
`;

export const NewButtonNotification = styled.TouchableOpacity`
    width: 50px;
    height: 88px;
    align-items: center;
    justify-content: center;
`;