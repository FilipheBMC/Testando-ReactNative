import { View, Text } from 'react-native';
import React, { useState } from 'react';

import { new_notifications } from '@src/Util/recent_notifications';
import { ArrowCircleUp } from "phosphor-react-native";
import { FlatList } from 'react-native';
import {
  Badge,
  ContentFlat,
  DataNotifications,
  DataNotificationText,
  NewNotificationFlat,
  TitleNotification,
  TitleNotificationsText,
  DescriptionNotification,
  DescriptionNotificationText,
  NewButtonNotification,

} from "./styled";

import { useTheme } from 'styled-components';

interface IContentTopProps {
  datetime: string;
  title: string;
  type: string;
};

export const ContentTop = (props: IContentTopProps) => {

  const { COLORS } = useTheme();

  const [isVerify, setIsVerify] = useState<boolean>(false);

  const handleVerify = () => {
    setIsVerify(!isVerify);
  }

  return (

    <ContentFlat>
      <NewNotificationFlat>
        <DataNotifications>
          <DataNotificationText>
            {props.datetime}
          </DataNotificationText>
        </DataNotifications>

        <TitleNotification>
          <TitleNotificationsText>
            {props.title}
          </TitleNotificationsText>
        </TitleNotification>

        <DescriptionNotification>
          <DescriptionNotificationText>{props.type}</DescriptionNotificationText>
        </DescriptionNotification>
      </NewNotificationFlat>
      <NewButtonNotification onPress={handleVerify}>
        {!isVerify ? (
          <ArrowCircleUp
            size={32}
            weight='regular'
            color={COLORS.GREEN2}
          />
        ) : (
          <ArrowCircleUp
            size={32}
            weight='regular'
            color={COLORS.ATTENTION_LIGHT9}
          />
        )}
        {/* // Uma forma de fazer
            // <ArrowCircleUp
            //   size={32}
            //   weight='regular'
            //   color={isVerify ? COLORS.GREEN2 : COLORS.ATTENTION_LIGHT9}
            // /> */}
      </NewButtonNotification>

      <Badge />
    </ContentFlat>
  );
};
