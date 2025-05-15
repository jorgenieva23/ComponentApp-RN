import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Title } from '../../components/ui/Title';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';
import { CustomView } from '../../components/ui/CustomView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../../config/theme/theme';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { top } = useSafeAreaInsets();

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 4000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          onRefresh={onRefresh}
          colors={[colors.primary, 'red','orange','green']}
        />
      }>
      <CustomView>
        <Title text="Pull Refresh" safe />
      </CustomView>
    </ScrollView>
  );
};
